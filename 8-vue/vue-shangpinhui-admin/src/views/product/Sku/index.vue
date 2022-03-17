<template>
  <div>
    <el-card>
      <el-table :data="records" border style="width: 100%">
        <el-table-column type="index" label="序号" width="80" align="center" />
        <el-table-column prop="skuName" label="名称" />
        <el-table-column prop="skuDesc" label="描述" />
        <el-table-column width="150" prop="prop" label="默认图片" align="center">
          <template v-slot="{row}">
            <img :src="row.skuDefaultImg" alt="" style="width: 100px;">
          </template>
        </el-table-column>
        <el-table-column prop="weight" label="重量(KG)" />
        <el-table-column width="80" prop="price" label="价格(元)" />
        <el-table-column prop="prop" label="操作" align="center">
          <template v-slot="{row}">
            <el-button v-if="row.isSale===0" title="上架" type="info" icon="el-icon-top" size="mini" @click="sale(row)" />
            <el-button v-else title="下架" type="success" icon="el-icon-bottom" size="mini" @click="cancel(row)" />
            <el-button title="修改" type="primary" icon="el-icon-edit" size="mini" @click="edit" />
            <el-button title="查看详情" type="info" icon="el-icon-info" size="mini" @click="getSkuInfo(row)" />
            <el-button title="删除" type="danger" icon="el-icon-delete" size="mini" />
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
        @current-change="getSkuList"
        @size-change="handleSizeChange"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Sku',
  data() {
    return {
      page: 1, // 代表当前第几页
      limit: 10, // 代表当前页面有几条数据
      records: [], // 存储SKU列表的数据
      total: 0, // 存储分页器一共展示的数据
      skuInfo: {}, // 存储SKU信息
      show: false
    }
  },
  mounted() {
    this.getSkuList()
  },
  methods: {
    // 获取sku列表数据的方法
    async getSkuList(pager = 1) {
      this.page = pager
      // 解构出默认的参数
      const { page, limit } = this
      const result = await this.$API.sku.reqSkuList(page, limit)
      if (result.code === 200) {
        this.total = result.data.total
        this.records = result.data.records
      }
    },
    handleSizeChange(limit) {
      this.limit = limit
      this.getSkuList()
    },
    // 上架
    async sale(row) {
      const result = await this.$API.sku.reqSale(row.id)
      if (result.code === 200) {
        row.isSale = 1
        this.$message({ type: 'success', message: '上架成功' })
      }
    },
    // 下架
    async cancel(row) {
      const result = await this.$API.sku.reqCancel(row.id)
      if (result.code === 200) {
        row.isSale = 0
        this.$message({ type: 'success', message: '下架成功' })
      }
    },
    edit() {
      this.$message('正在开发中')
    },
    // 获取sku详情的方法
    async getSkuInfo(sku) {
      // 展示抽屉
      this.show = true
      const result = await this.$API.sku.reqSkuById(sku.id)
      if (result.code === 200) {
        this.skuInfo = result.data
      }
    }
  }
}
</script>

<style scoped>

</style>
