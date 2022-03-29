<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称" size="normal">
        {{ spu.spuName }}
      </el-form-item>
      <el-form-item label="SKU名称" size="normal">
        <el-input v-model="skuInfo.skuName" placeholder="sku名称" />
      </el-form-item>
      <el-form-item label="价格(元)">
        <el-input v-model="skuInfo.price" placeholder="0" type="number" />
      </el-form-item>
      <el-form-item label="重量(千克)">
        <el-input v-model="skuInfo.weight" placeholder="重量(千克)" />
      </el-form-item>
      <el-form-item label="规格描述">
        <el-input
          v-model="skuInfo.skuDesc"
          placeholder="规格描述"
          type="textarea"
          :rows="4"
        />
      </el-form-item>
      <el-form-item label="平台属性">
        <el-form :inline="true" label-width="80px">
          <el-form-item
            v-for="attr in attrInfoList"
            :key="attr.id"
            :label="attr.attrName"
          >
            <el-select v-model="attr.attrIdAndValueId" placeholder="请选择">
              <el-option
                v-for="attrValue in attr.attrValueList"
                :key="attrValue.id"
                :value="`${attr.id}:${attrValue.id}`"
                :label="attrValue.valueName"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-form :inline="true" label-width="80px">
          <el-form-item
            v-for="saleAttr in spuSaleAttrList"
            :key="saleAttr.id"
            :label="saleAttr.saleAttrName"
          >
            <el-select v-model="saleAttr.attrIdAndValueId" placeholder="请选择">
              <el-option
                v-for="saleAttrValue in saleAttr.spuSaleAttrValueList"
                :key="saleAttrValue.id"
                :value="`${saleAttr.id}:${saleAttrValue.id}`"
                :label="saleAttrValue.saleAttrValueName"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="图片列表">
        <el-table
          border
          style="width: 100%"
          :data="spuImageList"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="80" />
          <el-table-column prop="prop" label="图片">
            <template v-slot="{ row }">
              <img :src="row.imgUrl" alt="" style="height: 100px">
            </template>
          </el-table-column>
          <el-table-column prop="imgName" label="名称" />
          <el-table-column prop="prop" label="操作">
            <template v-slot="{ row }">
              <el-button
                v-if="row.isDefault === 0"
                type="primary"
                @click="changeDefault(row)"
              >设为默认</el-button>
              <el-button
                v-else
                size="mini"
                type="success"
                plain
              >默认</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SkuForm',
  data() {
    return {
      spuImageList: [], // 存储图片的信息
      spuSaleAttrList: [], // 存储销售属性
      attrInfoList: [], // 存储平台属性的数据
      skuInfo: {
        // 收集sku数据的字段
        // 第一类收集的数据：父组件给的数据
        category3Id: 0,
        spuId: 0,
        tmId: 0,
        // 第二类：需要通过数据双向绑定v-model收集
        skuName: '',
        price: 0,
        weight: '',
        skuDesc: '',
        // 第三类：需要自己书写代码
        skuDefaultImg: '', // 默认图片
        skuImageList: [], // 收集图片的字段
        skuAttrValueList: [], // 平台属性
        skuSaleAttrValueList: [] // 销售属性
      },
      spu: {},
      // 收集图片的数据字段:但是需要注意，收集的数据目前缺少isDefault字段，将来提交给服务器数据的时候，需要整理参数
      imageList: []
    }
  },
  methods: {
    // 获取SkuForm数据
    async getData(category1Id, category2Id, spu) {
      // 收集父组件给的数据
      this.skuInfo.category3Id = spu.category3Id
      this.skuInfo.spuId = spu.id
      this.skuInfo.tmId = spu.tmId
      this.spu = spu
      // 获取图片的数据
      const result = await this.$API.spu.reqSpuImageList(spu.id)
      if (result.code === 200) {
        const list = result.data
        list.forEach(item => { item.isDefault = 0 })
        this.spuImageList = list
      }
      // 获取销售属性的数据
      const result1 = await this.$API.spu.reqSpuSaleAttrList(spu.id)
      if (result1.code === 200) {
        this.spuSaleAttrList = result1.data
      }
      // 获取平台属性的数据
      const result2 = await this.$API.spu.reqAttrInfoList(
        category1Id,
        category2Id,
        spu.category3Id
      )
      if (result2.code === 200) {
        this.attrInfoList = result2.data
      }
    },
    // table表格复选框按钮的事件
    handleSelectionChange(params) {
      // 获取到用户选中图片的信息数据，但是需要注意，当前收集的数据当中，缺少isDefault字段
      this.imageList = params
    },
    // 排他操作
    changeDefault(row) {
      // 图片列表的数据的isDefault字段变为 0
      this.spuImageList.forEach((item) => {
        item.isDefault = 0
      })
      // 点击的那个图片的数据变为1
      row.isDefault = 1
      // 收集默认图片的地址
      this.skuInfo.skuDefaultImg = row.imgUrl
    },
    // 取消按钮
    cancel() {
      this.$emit('changeScenes', 0)
      // 清除数据
      Object.assign(this._data, this.$options.data())
    },
    // 保存按钮
    async save() {
      // 整理参数
      // 整理平台属性
      const { attrInfoList, skuInfo, spuSaleAttrList, imageList } = this
      // 整理平台属性的数据
      skuInfo.skuAttrValueList = attrInfoList.reduce((prev, item) => {
        if (item.attrIdAndValueId) {
          const [attrId, valueId] = item.attrIdAndValueId.splice(':')
          prev.push({ attrId, valueId })
        }
        return prev
      }, [])
      // 整理销售属性
      skuInfo.skuSaleAttrValueList = spuSaleAttrList.reduce((prev, item) => {
        if (item.attrIdAndValueId) {
          const [saleAttrId, saleAttrValueId] = item.attrIdAndValueId.split(':')
          prev.push({ saleAttrId, saleAttrValueId })
        }
        return prev
      }, [])
      // 整理图片的数据
      skuInfo.skuImageList = imageList.map(item => {
        return {
          imgName: item.imgName,
          imgUrl: item.imgUrl,
          isDefault: item.isDefault,
          spuImgId: item.id
        }
      }, [])

      // 发请求
      try {
        const result = await this.$API.spu.reqAddSku(skuInfo)
        console.log(result)
        if (result.code === 200) {
          this.$message({ type: 'success', message: '添加sku成功' })
          this.$emit('changeScenes', 0)
        }
        // eslint-disable-next-line no-empty
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped>
</style>
