<template>
  <div>
    <el-form label-width="80px" :model="spu">
      <el-form-item label="SPU名称">
        <el-input v-model="spu.spuName" placeholder="SPU名称" />
      </el-form-item>
      <el-form-item label="品牌">
        <el-select v-model="spu.tmId" placeholder="请选择品牌">
          <el-option
            v-for="tm in tradeMarkList"
            :key="tm.id"
            :label="tm.tmName"
            :value="tm.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="SPU描述">
        <el-input
          v-model="spu.description"
          type="textarea"
          placeholder="描述"
          rows="4"
        />
      </el-form-item>
      <el-form-item label="SPU图片">
        <!--
          上传图片：
          action图片上传的地址
          list-type: 文件列表的类型
          on-preview:图片预览的时候会触发  图片预览功能
          on-remove:当删除图片的时候会触发  删除图片的时候会触发
          file-list：照片墙需要展示的数据【数组：数组里面的元素务必要有name、url属性】
        -->
        <el-upload
          action="/dev-api/admin/product/fileUpload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handlerSuccess"
          :file-list="spuImageList"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-select
          v-model="attrIdAndAttrName"
          :placeholder="`还有${unSelectSaleAttr.length}未选择`"
        >
          <el-option
            v-for="unselect in unSelectSaleAttr"
            :key="unselect.id"
            :label="unselect.name"
            :value="`${unselect.id}:${unselect.name}`"
          />
        </el-select>
        <el-button type="primary" icon="el-icon-plus" :disabled="!attrIdAndAttrName" @click="addSaleAttr">添加销售属性</el-button>
        <!-- 展示的是当前SPU属于自己的销售属性 -->
        <el-table border style="width: 100%" :data="spu.spuSaleAttrList">
          <el-table-column
            type="index"
            align="center"
            label="序号"
            width="80"
          />
          <el-table-column prop="saleAttrName" label="属性名" />
          <el-table-column prop="prop" label="属性值名称列表">
            <template v-slot="{ row }">
              <el-tag
                v-for="(tag, index) in row.spuSaleAttrValueList"
                :key="tag.id"
                closable
                :disable-transitions="false"
                @close="row.spuSaleAttrValueList.splice(index, 1)"
              >
                {{ tag.saleAttrValueName }}
              </el-tag>
              <!--底下的解构可以当中咱们当年的span与input切换-->
              <!--@keyup.enter.native="handleInputConfirm"-->
              <el-input
                v-if="row.inputVisible"
                ref="saveTagInput"
                v-model="row.inputValue"
                class="input-new-tag"
                size="small"
                @blur="handleInputConfirm(row)"
              />
              <!--@click="showInput"-->
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="addSaleAttrValue(row)"
              >添加</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="prop" label="操作">
            <template v-slot="{ row, $index }">
              <el-button @click="spu.spuSaleAttrList.splice($index,1)" type="danger" icon="el-icon-delete" size="mini" />
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addOrUpdateSpu">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SpuForm',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      // spu属性初始化的时候是一个空的对象,在修改SPU的时候，会想服务器发请求，返回SPU信息（对象），
      // 在修改的时候可以利用服务器返回的这个对象收集最新的数据提交给服务器
      // 添加SPU，如果是添加SPU的时候并没有向服务器发请求，数据收集到哪里呀[SPU]，收集数据的时候有哪些字段呀，看文档
      spu: {
        category3Id: 0, // 三级分类的id
        descriptions: '', // 描述
        spuName: '', // spu名称
        tmId: '', // 平台的id
        spuImageList: [], // 收集spu图片的信息
        spuSaleAttrList: [] // 平台属性与属性值收集
      },
      tradeMarkList: [], // 存储品牌信息
      spuImageList: [], // 存储spu图片数据
      saleAttrList: [], // 销售属性的数据（项目全部的销售属性）
      attrIdAndAttrName: '' // 收集未选择的销售属性的id-----
    }
  },
  computed: {
    // 计算出还未选择的销售属性
    unSelectSaleAttr() {
      // 整个平台的销售属性一共三个：尺寸、颜色、版本 ----saleAttrList
      // 当前SPU拥有的属于自己的销售属性spu.spuSaleAttrList  ----颜色
      // 数组的过滤方法，可以从已有的数组当中过滤出用户需要的元素，并未返回一个新的数据
      /* return this.saleAttrList.filter(item => {
        // every数组的方法，会返回一个布尔值【真，假的】
        return this.spu.spuSaleAttrList.every(item1 => {
          return item.name !== item1.saleAttrName
        })
      })*/
      return this.saleAttrList.filter((item) => this.spu.spuSaleAttrList.every((item1) => item.name !== item1.saleAttrName))
    }
  },
  methods: {
    // 照片墙删除某一个图片的时候会触发
    handleRemove(file, fileList) {
      // file参数:代表的是删除的那个张图片
      // fileList:照片墙删除某一张图片以后，剩余的其他的图片
      // console.log(file, fileList)
      // 收集照片墙图片的数据
      // 对于已有的图片【照片钱中显示的图片：有name、url字段的】，因为照片墙显示数据务必要有这两个属性
      // 对于服务器而言，不需要name、url字段，将来对于有的图片的数据在提交给服务器的时候，需要处理的
      this.spuImageList = fileList
    },
    // 照片墙图片预览的回调
    handlePictureCardPreview(file) {
      // 将图片地址赋值给这个属性
      this.dialogImageUrl = file.url
      // 对话框显示
      this.dialogVisible = true
    },
    // 照片墙上传成功的回调
    handlerSuccess(response, file, fileList) {
      // 收集图片的信息
      this.spuImageList = fileList
    },
    // 添加新的销售属性
    addSaleAttr() {
      // 已经收集需要添加的销售属性的信息
      // 把收集到的销售属性数据进行分割
      const [baseSaleAttrId, saleAttrName] = this.attrIdAndAttrName.split(':')
      // 向SPU对象的spuSaleAttrList属性里面添加新的销售属性
      const newSaleAttr = { baseSaleAttrId, saleAttrName, spuSaleAttrValueList: [] }
      // 添加新的销售属性
      this.spu.spuSaleAttrList.push(newSaleAttr)
      // 清空数据
      this.attrIdAndAttrName = ''
    },
    // 添加按钮的回调
    addSaleAttrValue(row) {
      // 点击销售属性值当中添加按钮的时候，需要有button变为input,通过当前销售属性的inputVisible控制
      // 挂载在销售属性身上的响应式数据inputVisible，控制button与input切换
      this.$set(row, 'inputVisible', true)
      // 通过响应式数据inputValue字段收集新增的销售属性值
      this.$set(row, 'inputValue', '')
    },
    // el-input失去焦点的事件
    handleInputConfirm(row) {
      // 解构出销售属性当中收集数据
      const { baseSaleAttrId, inputValue } = row
      // 新增的销售属性值的名称不能为空
      if (inputValue.trim() === '') {
        this.$message('属性值不能为空')
        return
      }
      // 属性值也不能重复，这里也可以用some
      const result = row.spuSaleAttrValueList.every(item => item.saleAttrValueName !== inputValue)
      if (!result) {
        this.$message('属性值不能重复')
        return
      }
      // 新增的销售属性值
      const newSaleAttrValue = { baseSaleAttrId, saleAttrValueName: inputValue }
      row.spuSaleAttrValueList.push(newSaleAttrValue)
      // 修改inputVisible为false，不就显示button
      row.inputVisible = false
    },
    // 保存按钮的回调
    async addOrUpdateSpu() {
      // 整理参数：需要整理照片墙的数据
      // 携带参数：对于图片，需要携带imageName与imageUrl字段
      this.spu.spuImageList = this.spuImageList.map(item => {
        return {
          imgName: item.name,
          imgUrl: (item.response && item.response.data) || item.url
        }
      })
      // 发请求
      const result = await this.$API.spu.reqAddOrUpdateSpu(this.spu)
      if (result.code === 200) {
        // 提示
        this.$message({ type: 'success', message: '保存成功' })
        // 通知父组件回到场景0
        this.$emit('changeScene', {
          scene: 0,
          flag: this.spu.id ? '修改' : '添加'
        })
      }
      // 清除数据
      Object.assign(this._data, this.$options.data())
    },
    // 点击添加SPU按钮的时候，发请求的函数
    async addSpuData(category3Id) {
      // 添加SPU的时候收集三级分类的id
      this.spu.category3Id = category3Id
      // 获取品牌信息
      const tradeMarkResult = await this.$API.spu.reqTradeMarkList()
      if (tradeMarkResult.code === 200) {
        this.tradeMarkList = tradeMarkResult.data
      }
      // 获取全部销售属性
      const saleResult = await this.$API.spu.reqBaseSaleAttrList()
      if (saleResult.code === 200) {
        this.saleAttrList = saleResult.data
      }
    },
    // 点击取消按钮的回调
    cancel() {
      // 取消按钮的回调，通知父组件切换场景为0
      this.$emit('changeScene', { scene: 0, flag: '' })
      // 清理数据
      // Object.assign:es6中新增的方法可以合并对象
      // 组件实例this._data,可以操作data当中响应式数据
      // this.$options可以获取配置对象，配置对象的data函数执行，返回的响应式数据为空的
      Object.assign(this._data, this.$options.data())
    },
    // 初始化SpuForm数据
    async initSpuData(spu) {
      // 获取Spu信息的数据
      const spuResult = await this.$API.spu.reqSpu(spu.id)
      if (spuResult.code === 200) {
        // 在修改spu的时候,需要向服务器发请求的，把服务器返回的数据（对象），赋值给spu属性
        this.spu = spuResult.data
      }
      // 获取品牌的信息
      const tradeMarkResult = await this.$API.spu.reqTradeMarkList()
      if (tradeMarkResult.code === 200) {
        this.tradeMarkList = tradeMarkResult.data
      }
      // 获取spu图片的数据
      const spuImageResult = await this.$API.spu.reqSpuImageList(spu.id)
      if (spuImageResult.code === 200) {
        // 由于照片墙显示图片的数据需要数组，数组里面的元素需要有name与url字段
        // 需要把服务器返回的数据进行修改
        const listArr = spuImageResult.data
        listArr.forEach((item) => {
          item.name = item.imgName
          item.url = item.imgUrl
        })
        // 把整理好的数据赋值给 spuImageList
        this.spuImageList = listArr
      }
      // 获取平台全部的销售属性
      const saleResult = await this.$API.spu.reqBaseSaleAttrList()
      if (saleResult.code === 200) {
        this.saleAttrList = saleResult.data
      }
    }
  }
}
</script>

<style>
.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
