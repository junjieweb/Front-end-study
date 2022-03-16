<template>
  <div>
    <el-card style="margin: 20px 0">
      <CategorySelect :show="!isShowTable" @getCategoryId="getCategoryId" />
    </el-card>

    <el-card>
      <div v-show="isShowTable">
        <el-button
          style="margin-bottom:10px"
          type="primary"
          icon="el-icon-plus"
          :disabled="!category3Id"
          @click="addAttr"
        >添加属性
        </el-button>
        <!--表格 展示商品属性-->
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
              <el-button type="warning" icon="el-icon-edit" size="mini" @click="updateAttr(row)" />
              <el-button type="danger" icon="el-icon-delete" size="mini" />
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--添加属性|修改属性的结构-->
      <div v-show="!isShowTable">
        <el-form ref="form" :inline="true" label-width="80px" :model="attrInfo">
          <el-form-item label="属性名">
            <el-input v-model="attrInfo.attrName" placeholder="请输入属性名" />
          </el-form-item>
        </el-form>
        <el-button type="primary" icon="el-icon-plus" :disabled="!attrInfo.attrName" @click="addAttrValue">添加属性值</el-button>
        <el-button @click="isShowTable=true">取消</el-button>
        <el-table border style="width: 100%;margin: 10px 0" :data="attrInfo.attrValueList">
          <el-table-column
            align="center"
            type="index"
            label="序号"
            width="80"
          />
          <el-table-column prop="prop" label="属性值名称" width="width">
            <template v-slot="{row,$index}">
              <!-- 这里结构需要用到span与input进行来回的切换 -->
              <el-input
                v-if="row.flag"
                :ref="$index"
                v-model="row.valueName"
                size="mini"
                placeholder="请输入属性值名称"
                @blur="toLook(row)"
                @keyup.native.enter="toLook(row)"
              />
              <span v-else style="display: block">{{ row.valueName }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作">
            <template v-slot="{row,$index}">
              <el-button type="danger" icon="el-icon-delete" size="mini" />
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary">保存</el-button>
        <el-button @click="isShowTable=true">取消</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
// 按需引入lodash中的深拷贝
import cloneDeep from 'lodash/cloneDeep'
export default {
  name: 'Attr',
  data() {
    return {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      attrList: [],
      isShowTable: true, // 控制table表格显示与隐藏的
      attrInfo: { // 收集新增属性|修改属性使用的
        attrName: '', // 属性名
        attrValueList: [
          // 属性值，因为属性值可以有多个因此用数组，每一个属性值都是一个对象需要attrId，valueName
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
    },
    // 添加属性值回调
    addAttrValue() {
      // 向属性值的数组里面添加元素
      // attrId 是相应的属性的id，目前而言是添加属性的操作，还没有相应的属性的id，目前带给服务器的id为undefined
      this.attrInfo.attrValueList.push({
        // 对于修改某一个属性的时候，可以在已有的属性值基础之上新增新的属性值（新增属性值的时候，需要把已有的属性的id带上）
        attrId: this.attrInfo.id,
        // valueName 相应的属性值的名称
        valueName: '',
        // flag属性：给每一个属性值添加一个标记flag，用户切换查看模式与编辑模式，好处，每一个属性值可以控制自己的模式切换
        // 当前flag属性，响应式数据（数据变化视图跟着变化）
        flag: true
      })
    },
    // 添加属性按钮的回调
    addAttr() {
      // 切换table显示与隐藏
      this.isShowTable = false
      // 清除数据 收集三级分类id
      this.attrInfo = {
        attrName: '',
        attrValueList: [],
        categoryId: this.category3Id, // 三级分类的id
        categoryLevel: 3 // 服务器需要区分几级id
      }
    },
    // 修改一个属性
    updateAttr(row) {
      this.isShowTable = false
      // 将选中的属性赋值给attrInfo
      // 由于数据结构当中存在对象里面套数组，数组里面有套对象，因此需要使用深拷贝解决这类问题
      // 深拷贝，浅拷贝在面试的时候出现频率很高，切记达到手写深拷贝与浅拷贝
      this.attrInfo = cloneDeep(row)
    },
    // 失去焦点的事件---切换为查看模式，展示span
    toLook(row) {
      // row：形参是当前用户添加的最新的属性值
      // 如果属性值为空不能作为新的属性值，需要给用户提示，让他输入一个其他的属性值
      if (row.valueName.trim() === '') {
        this.$message('属性值不能为空')
        return
      }
      // 新增的属性值不能与已有的属性值重复
      const isRepeat = this.attrInfo.attrValueList.some(item => {
        // 需要将row从数组里面判断的时候去除
        // row最新新增的属性值【数组的最后一项元素】
        // 判断的时候，需要把已有的数组当中新增的这个属性值去除
        if (row !== item) {
          return row.valueName === item.valueName
        }
      })
      if (isRepeat) return
      // 当前编辑模式变为查看模式【让input消失，显示span】
      row.flag = false
    }
  }
}
</script>

<style scoped>

</style>
