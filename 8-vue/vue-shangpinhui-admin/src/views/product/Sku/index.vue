<template>
  <div class="sku-list">
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
      <!--抽屉效果-->
      <el-drawer :visible.sync="drawer" :with-header="false" size="50%">
        <el-row>
          <el-col :span="5">名称</el-col>
          <el-col :span="16">{{ skuInfo.skuName }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="5">描述</el-col>
          <el-col :span="16">{{ skuInfo.skuDesc }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="5">价格</el-col>
          <el-col :span="16">{{ skuInfo.price }} 元</el-col>
        </el-row>
        <el-row>
          <el-col :span="5">平台属性</el-col>
          <el-col :span="16">
            <el-tag v-for="value in skuInfo.skuAttrValueList" :key="value.id" type="success" style="margin: 0 5px">
              {{ value.attrId }} - {{ value.valueId }}
            </el-tag>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5">商品图片</el-col>
          <el-col :span="16">
            <el-carousel trigger="click" class="sku-carousel" height="400px">
              <el-carousel-item v-for="item in skuInfo.skuImageList" :key="item.id">
                <img :src="item.imgUrl" alt="">
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
      </el-drawer>
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
      total: 0, // 存储分页器一共展示的数据
      records: [], // 存储SKU列表的数据
      skuInfo: {}, // 存储SKU信息
      drawer: false
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
        // eslint-disable-next-line require-atomic-updates
        row.isSale = 1
        this.$message({ type: 'success', message: '上架成功' })
      }
    },
    // 下架
    async cancel(row) {
      const result = await this.$API.sku.reqCancel(row.id)
      if (result.code === 200) {
        // eslint-disable-next-line require-atomic-updates
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
      this.drawer = true
      const result = await this.$API.sku.reqSkuById(sku.id)
      if (result.code === 200) {
        this.skuInfo = result.data
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 一部分组件内的元素，我们使用类添加样式是生效的
// 还有一部分组件内的元素，我们添加样式不生效
// 原因？ 如何解决？
// 第一种解决方案： 添加样式不生效的样式全部放到style标签当中，不加scoped,
// 在跟标签添加一个类,目的是让这个样式不影响其它的组件

// 第二种解决方案（添加scoped）： 使用深度作用选择器
// 深度作用选择器的写法    ********************
//   如果是原生css 深度作用选择器
//       父元素 >>> 选中的元素
//   如果是less  scss 预编译的css文件
//       /deep/ 用于less
//       ::v-deep  都行

.sku-list {
  .el-row {
    height: 40px;
    .el-col {
      line-height: 40px;
      &.el-col-5 {
        font-size: 18px;
        font-weight: bold;
        text-align: right;
        margin-right: 20px;
      }
    }
  }

  .sku-carousel {
    width: 400px;
    border: 1px solid #ccc;
    img {
      width: 400px;
      height: 400px;
    }
  }

  ::v-deep .el-carousel__indicator{
    button{
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: hotpink;
    }
    &.is-active{
      button{
        background-color: purple;
      }
    }
  }
}
</style>
