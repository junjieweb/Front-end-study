<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="SPU名称" size="normal">手机</el-form-item>
      <el-form-item label="SKU名称" size="normal">
        <el-input placeholder="sku名称"></el-input>
      </el-form-item>
      <el-form-item label="价格(元)">
        <el-input placeholder="0"></el-input>
      </el-form-item>
      <el-form-item label="重量(千克)">
        <el-input placeholder="重量(千克)"></el-input>
      </el-form-item>
      <el-form-item label="规格描述">
        <el-input type="textarea" :rows="4"></el-input>
      </el-form-item>
      <el-form-item label="平台属性">
        <el-form :inline="true" label-width="80px">
          <el-form-item label="手机一级">
            <el-select value="" placeholder="请选择">
              <el-option value="安卓手机"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机二级">
            <el-select value="" placeholder="请选择">
              <el-option value="安卓手机"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-form :inline="true" label-width="80px">
          <el-form-item label="手机一级">
            <el-select value="" placeholder="请选择">
              <el-option value="安卓手机"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机二级">
            <el-select value="" placeholder="请选择">
              <el-option value="安卓手机"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-form-item>
      <el-form-item label="图片列表">
        <el-table border style="width: 100%">
          <el-table-column type="selection" width="80"></el-table-column>
          <el-table-column prop="prop" label="图片"></el-table-column>
          <el-table-column prop="prop" label="名称"></el-table-column>
          <el-table-column prop="prop" label="操作">
            <template v-slot="">
              <el-button type="primary">设为默认</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'SkuForm'
}
</script>

<style scoped>

</style>
