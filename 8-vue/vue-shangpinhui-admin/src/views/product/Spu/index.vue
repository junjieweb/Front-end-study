<template>
  <div>
    <el-card style="margin: 20px 0">
      <!-- 三级联动已经是全局组件了 -->
      <CategorySelect :show="!show" @getCategoryId="getCategoryId" />
    </el-card>
    <el-card>
      <!-- 底部这里将来是有三部分进行切换 -->
      <div>
        <!--展示SPU列表的结构-->
        <el-button
          @click="addSpu"
          :disabled="!category3Id"
          type="primary"
          icon="el-icon-plus"
          style="margin-bottom: 10px"
          >添加SPU</el-button
        >
        <el-table border style="width: 100%">
          <el-table-column
            label="序号"
            type="index"
            align="center"
            width="80"
          ></el-table-column>
          <el-table-column prop="name" label="SPU名称"> </el-table-column>
          <el-table-column prop="address" label="SPU描述"> </el-table-column>
          <el-table-column prop="address" label="操作">
            <template v-slot="{ show, $index }">
              <el-button
                type="success"
                size="mini"
                icon="el-icon-plus"
              ></el-button>
              <el-button
                type="warning"
                size="mini"
                icon="el-icon-edit"
              ></el-button>
              <el-button
                type="info"
                size="mini"
                icon="el-icon-info"
              ></el-button>
              <el-button
                type="danger"
                size="mini"
                icon="el-icon-delete"
              ></el-button>
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
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Spu",
  data() {
    return {
      category1Id: "",
      category2Id: "",
      category3Id: "",
      page: 1, // 代表的分页器第几页
      limit: 5, // 当前页数展示数据条数
      total: 0, // 总共数据条数
      records: [], //spu列表的数据
      scene: 0, // 0代表展示SPU列表数据   1 添加SPU|修改SPU   2 添加SKU
      show: true,
    };
  },
  methods: {
    // 自定义事件的回调
    getCategoryId({ categoryId, level }) {
      // categoryId:获取到一、二、三级分类的id  level：为了区分是几级id
      // 区分三级分类相应的id，以及父组件进行存储
      if (level === 1) {
        this.category1Id = categoryId;
        this.category2Id = "";
        this.category3Id = "";
      } else if (level === 2) {
        this.category2Id = categoryId;
        this.category3Id = "";
      } else {
        // 代表三级分类的id有了
        this.category3Id = categoryId;
        // 发请求获取SPU列表数据
        this.getSpuList();
      }
    },
    // 获取Spu列表数据的方法
    async getSpuList(pager = 1) {
      this.page = pager;
      const { page, limit, category3Id } = this;
      // 携带三个参数:page 第几页  limit 每一页需要展示多少条数据  三级分类id
      const result = await this.$API.spu.reqSpuList(page, limit, category3Id);
      if (result.code === 200) {
        this.total = result.data.total;
        this.records = result.data.records;
      }
    },
    //当分页器的某一个展示数据条数发生变化的回调
    handleSizeChange(limit) {
      this.limit = limit;
      this.getSpuList();
    },
    //添加SPU按钮的回调
    addSpu() {},
  },
};
</script>

<style scoped></style>
