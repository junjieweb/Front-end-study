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
          <el-table-column prop="address" label="操作"> </el-table-column>
        </el-table>
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
    getSpuList() {},
    addSpu() {},
  },
};
</script>

<style scoped></style>
