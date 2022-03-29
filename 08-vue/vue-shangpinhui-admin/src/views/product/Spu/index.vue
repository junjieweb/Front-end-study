<template>
  <div>
    <el-card style="margin: 20px 0">
      <!-- 三级联动已经是全局组件了 -->
      <CategorySelect :show="scene !== 0" @getCategoryId="getCategoryId" />
    </el-card>
    <el-card>
      <!-- 底部这里将来是有三部分进行切换 -->
      <div v-show="scene === 0">
        <!--展示SPU列表的结构-->
        <el-button
          :disabled="!category3Id"
          type="primary"
          icon="el-icon-plus"
          style="margin-bottom: 10px"
          @click="addSpu"
        >添加SPU
        </el-button>
        <el-table border style="width: 100%" :data="records">
          <el-table-column
            label="序号"
            type="index"
            align="center"
            width="80"
          />
          <el-table-column prop="spuName" label="SPU名称" />
          <el-table-column prop="description" label="SPU描述" />
          <el-table-column prop="prop" label="操作">
            <template v-slot="{ row }">
              <hint-button
                title="添加Sku"
                type="success"
                size="mini"
                icon="el-icon-plus"
                @click="addSku(row)"
              />
              <hint-button
                title="修改Spu"
                type="warning"
                size="mini"
                icon="el-icon-edit"
                @click="updateSpu(row)"
              />
              <hint-button
                title="查看当前Spu所有Sku列表"
                type="info"
                size="mini"
                icon="el-icon-info"
                @click="handler(row)"
              />
              <el-popconfirm title="这是一段内容确定删除吗？" @onConfirm="deleteSpu(row)">
                <hint-button
                  slot="reference"
                  title="删除Spu"
                  type="danger"
                  size="mini"
                  icon="el-icon-delete"
                />
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          style="text-align: center; margin-top: 20px"
          :current-page="page"
          :total="total"
          :page-sizes="[5, 10, 20]"
          :page-size="limit"
          :page-count="7"
          background
          layout="prev, pager, next, jumper, ->, sizes, total"
          @current-change="getSpuList"
          @size-change="handleSizeChange"
        />
      </div>
      <SpuForm v-show="scene === 1" @changeScene="changeScene" ref="spu"/>
      <SkuForm v-show="scene === 2" ref="sku" @changeScenes="changeScenes"/>
    </el-card>
    <el-dialog :title="`${spu.spuName}的sku列表`" :visible.sync="dialogTableVisible">
      <el-table v-loading="loading" :data="skuList" width="100%">
        <el-table-column prop="skuName" label="名称" ></el-table-column>
        <el-table-column prop="price" label="价格" ></el-table-column>
        <el-table-column prop="weight" label="重量"></el-table-column>
        <el-table-column label="默认图片">
          <template v-slot="{row}">
            <img :src="row.skuDefaultImg" alt="" style="width: 100px">
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import SpuForm from '@/views/product/Spu/SpuForm'
import SkuForm from '@/views/product/Spu/SkuForm'
export default {
  name: 'Spu',
  components: {
    SpuForm,
    SkuForm
  },
  data() {
    return {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      page: 1, // 代表的分页器第几页
      limit: 5, // 当前页数展示数据条数
      total: 0, // 总共数据条数
      records: [], // spu列表的数据
      scene: 0, // 0代表展示SPU列表数据   1 添加SPU|修改SPU   2 添加SKU
      dialogTableVisible: false, // 控制对话框的显示与隐藏
      spu: {},
      skuList: [], // 存储的是SKU列表的数据
      loading: true
    }
  },
  methods: {
    // 自定义事件的回调
    getCategoryId({ categoryId, level }) {
      // categoryId:获取到一、二、三级分类的id  level：为了区分是几级id
      // 区分三级分类相应的id，以及父组件进行存储
      if (level === 1) {
        this.category1Id = categoryId
        this.category2Id = ''
        this.category3Id = ''
      } else if (level === 2) {
        this.category2Id = categoryId
        this.category3Id = ''
      } else {
        // 代表三级分类的id有了
        this.category3Id = categoryId
        // 发请求获取SPU列表数据
        this.getSpuList()
      }
    },
    // 获取Spu列表数据的方法
    async getSpuList(pager = 1) {
      this.page = pager
      const { page, limit, category3Id } = this
      // 携带三个参数:page 第几页  limit 每一页需要展示多少条数据  三级分类id
      const result = await this.$API.spu.reqSpuList(page, limit, category3Id)
      if (result.code === 200) {
        this.total = result.data.total
        this.records = result.data.records
      }
    },
    // 当分页器的某一个展示数据条数发生变化的回调
    handleSizeChange(limit) {
      this.limit = limit
      this.getSpuList()
    },
    // 添加SPU按钮的回调
    addSpu() {
      this.scene = 1
      // 通知子组件SpuForm发请求 两个
      this.$refs.spu.addSpuData(this.category3Id)
    },
    // 修改某一个Spu
    updateSpu(row) {
      this.scene = 1
      // 获取子组件SpuForm
      // 在父组件中可以通过$refs获取到子组件
      this.$refs.spu.initSpuData(row)
    },
    // 自定义事件的回调（SpuForm）
    changeScene({ scene, flag }) {
      this.scene = scene
      // 子组件通知父组件切换场景，需要再次获取SPU列表的数据进行展示
      if (flag === '修改') {
        this.getSpuList(this.page)
      } else {
        this.getSpuList()
      }
    },
    // 删除spu的回调
    async deleteSpu(row) {
      const result = await this.$API.spu.reqDeleteSpu(row.id)
      if (result.code === 200) {
        this.$message({ type: 'success', message: '删除成功' })
        // 代表SPU个数大于1删除的时候停留在当前页，如果SPU个数小于1 回到上一页
        await this.getSpuList(this.records.length > 1 ? this.page : this.page - 1)
      }
    },
    // 添加Sku
    addSku(row) {
      this.scene = 2
      // 父组件调用子组件的方法，让子组件发请求------三个请求
      this.$refs.sku.getData(this.category1Id, this.category2Id, row)
    },
    changeScenes(scene) {
      this.scene = scene
    },
    // 查看sku按钮的回调
    async handler(spu) {
      this.dialogTableVisible = true
      this.spu = spu
      // 获取sku列表数据进行展示
      const result = await this.$API.spu.reqSkuList(spu.id)
      if (result.code === 200) {
        this.skuList = result.data
        this.loading = false
      }
    },
    // 关闭对话框的回调
    close(done) {
      this.loading = true
      this.skuList = []
      done()
    }
  }
}
</script>

<style scoped></style>
