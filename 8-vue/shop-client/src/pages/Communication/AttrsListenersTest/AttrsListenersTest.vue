<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    

    <!-- $attrs和$listeners主要是用来让我们根据已有的组件封装自己的组件 -->

    <!-- <el-button type="danger" icon="el-icon-plus" size="mini"></el-button>
    <el-button type="warning" icon="el-icon-edit" size="mini"></el-button> -->

    <HintButton type="danger" icon="el-icon-plus" size="mini" title="添加" @click="test1"></HintButton>
    <HintButton type="warning" icon="el-icon-edit" size="mini" title="修改" @click="test1"></HintButton>

  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from '@/pages/Communication/AttrsListenersTest/HintButton'
  export default {
    name: 'AttrsListenersTest',
    components:{
      HintButton
    },
    methods: {
      test1(){
        console.log(111)
      }
    },
  }
</script>
