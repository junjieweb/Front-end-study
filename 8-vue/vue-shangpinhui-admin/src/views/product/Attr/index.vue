<template>
  <div>
    <el-card style="margin: 20px 0">
      <CategorySelect @getCategoryId="getCategoryId" />
    </el-card>

    <el-card>
      <div v-show="isShowTable">
        <el-button
          style="margin-bottom:10px"
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="isShowTable=false"
        >添加属性
        </el-button>
        <el-table border style="width: 100%" :data="attrList">
          <el-table-column
            type="index"
            align="center"
            label="序号"
            width="80"
          />
          <el-table-column prop="attrName" label="属性名称" width="150" />
          <el-table-column prop="prop" label="属性值列表" width="width">
            <template v-slot="{row}">
              <el-tag
                v-for="attrValue in row.attrValueList"
                :key="attrValue.id"
                hit
                style="margin: 0 10px"
                type="success"
              >
                {{ attrValue.valueName }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作" width="150">
            <template v-slot="{row}">
              <el-button type="warning" icon="el-icon-edit" size="mini" @click="isShowTable=false" />
              <el-button type="danger" icon="el-icon-delete" size="mini" />
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--添加属性|修改属性的结构-->
      <div v-show="!isShowTable">
        <el-form :inline="true" label-width="80px" :model="attrInfo">
          <el-form-item label="属性名">
            <el-input placeholder="请输入属性名" v-model="attrInfo.attrName"/>
          </el-form-item>
        </el-form>
        <el-button type="primary" icon="el-icon-plus">添加属性值</el-button>
        <el-button @click="isShowTable=true">取消</el-button>
        <el-table border style="width: 100%;margin: 10px 0">
          <el-table-column
            align="center"
            type="index"
            label="序号"
            width="80"
          />
          <el-table-column prop="prop" label="属性值名称" width="width" />
          <el-table-column prop="prop" label="操作" />
        </el-table>
        <el-button type="primary">保存</el-button>
        <el-button @click="isShowTable=true">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Attr',
  data() {
    return {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      attrList: [],
      isShowTable: false, // 控制table表格显示与隐藏的
      attrInfo: { // 收集新增属性|修改属性使用的
        attrName: '', // 属性名
        attrValueList: [
          {
            // 属性值，因为属性值可以有多个因此用数组，每一个属性值都是一个对象需要attrId，valueName
            attrId: 0, // 相应的属性名的id
            valueName: ''
          }
        ],
        categoryId: 0, // 三级分类的id
        categoryLevel: 3// 因为服务器也需要区分几级id
      }
    }
  },
  methods: {
    // 自定义事件的回调
    getCategoryId({ categoryId, level }) {
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
        // 发请求获取商品基础属性
        this.getAttrList()
      }
    },
    // 获取平台属性的数据
    // 当用户确定三级分类的数据时候，可以向服务器发请求获取平台属性进行展示
    async getAttrList() {
      // 获取相关的分类id
      const { category1Id, category2Id, category3Id } = this
      // 获取商品属性列表
      const result = await this.$API.attr.reqAttrList(category1Id, category2Id, category3Id)
      if (result.code === 200) {
        this.attrList = result.data
      }
    }
  }
}
</script>

<style scoped>

</style>
