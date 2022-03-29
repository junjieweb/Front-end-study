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
              <span v-else style="display: block" @click="toEdit(row,$index)">{{ row.valueName }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作">
            <template v-slot="{row,$index}">
              <!--气泡确认框-->
              <el-popconfirm :title="`确定删除${row.valueName}?`" @onConfirm="deleteAttrValue($index)">
                <el-button slot="reference" type="danger" icon="el-icon-delete" size="mini" />
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-button :disabled="attrInfo.attrValueList.length < 1" type="primary" @click="addOrUpdateAttr">保存</el-button>
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
      this.$nextTick(() => {
        this.$refs[this.attrInfo.attrValueList.length - 1].focus()
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
      // 在修改某一个属性的时候，将相应的属性值元素添加上flag这个标记
      this.attrInfo.attrValueList.forEach(item => {
        // 这样书写也可以给属性值添加flag自动，但是会发现视图不会跟着变化（因为flag不是响应式数据）
        // 因为Vue无法探测普通的新增 property,这样书写的属性并非响应式属性（数据变化视图跟这边）
        // 第一个参数:对象  第二个参数:添加新的响应式属性  第三个参数：新的属性的属性值
        this.$set(item, 'flag', false)
      })
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
      if (isRepeat) {
        this.$message('请勿添加重复属性')
        return
      }
      // 当前编辑模式变为查看模式【让input消失，显示span】
      row.flag = false
    },
    // 点击span的回调，变为编辑模式
    toEdit(row, index) {
      row.flag = true
      // 获取input节点，实现自动聚焦
      // 需要注意：点击span的时候，切换为input变为编辑模式，但是需要注意，对于浏览器而言，页面重绘与重拍耗时间的
      // 点击span的时候，重绘重排一个input它是需要耗费事件，因此我们不可能一点击span立马获取到input
      // $nextTick,当节点渲染完毕了，会执行一次
      this.$nextTick(() => {
        // 获取相应的input表单元素实现聚焦
        this.$refs[index].focus()
      })
    },
    // 气泡确认框确定按钮的回调
    // 最新版本的ElementUI----2.15.6，目前模板中的版本号2.13.x
    deleteAttrValue(index) {
      // 当前删除属性值的操作是不需要发请求的
      this.attrInfo.attrValueList.splice(index, 1)
    },
    // 保存按钮：进行添加属性或者修改属性的操作
    async addOrUpdateAttr() {
      // 整理参数:1,如果用户添加很多属性值，且属性值为空的不应该提交给服务器
      // 提交给服务器数据当中不应该出现flag字段
      this.attrInfo.attrValueList = this.attrInfo.attrValueList.filter(item => {
        // 过滤掉属性值不是空的
        if (item.valueName !== '') {
          // 删除flag属性
          delete item.flag
          return true
        }
      })
      try {
        await this.$API.attr.reqAddOrUpdateAttr(this.attrInfo)
        // 展示平台属性的信号量进行切换
        this.isShowTable = true
        // 提示消息
        this.$message({ type: 'success', message: '保存成功' })
        // 保存成功以后需要再次获取平台属性进行展示
        await this.getAttrList()
      } catch (e) {
        // this.$message('保存失败')
      }
    }
  }
}
</script>

<style scoped>

</style>
