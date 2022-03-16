<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="SPU名称">
        <el-input placeholder="SPU名称" />
      </el-form-item>
      <el-form-item label="品牌">
        <el-select placeholder="请选择品牌" value="">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="SPU描述">
        <el-input type="textarea" placeholder="描述" rows="4" />
      </el-form-item>
      <el-form-item label="SPU图片">
        <!--
          上传图片：
          action图片上传的地址
          list-type: 文件列表的类型
          on-preview:图片预览的时候会出发
          on-remove:当删除图片的时候会出发
          file-list：照片墙需要展示的数据【数组：数组里面的元素务必要有name、url属性】
          on-preview：图片预览功能
          on-remove:删除图片的时候会触发

          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handlerSuccess"
          :file-list="spuImageList"
        -->
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="销售属性">
        <el-select placeholder="还有3未选择" value="">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
        <el-button type="primary" icon="el-icon-plus">添加销售属性</el-button>
        <el-table border style="width: 100%">
          <el-table-column type="index" align="center" label="序号" width="80" />
          <el-table-column prop="prop" label="属性名" />
          <el-table-column prop="prop" label="属性值名称列表" />
          <el-table-column prop="prop" label="操作" />
        </el-table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button @click="$emit('changeScene',0)">取消</el-button>
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
      dialogVisible: false
      // spu属性初始化的时候是一个空的对象,在修改SPU的时候，会想服务器发请求，返回SPU信息（对象），
      // 在修改的时候可以利用服务器返回的这个对象收集最新的数据提交给服务器
      // 添加SPU，如果是添加SPU的时候并没有向服务器发请求，数据收集到哪里呀[SPU]，收集数据的时候有哪些字段呀，看文档
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 初始化SpuForm数据
    initSpuData(spu) {
      console.log(spu)
    }
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
</style>
