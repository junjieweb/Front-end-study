<template>
  <div style="background: #ccc; height: 50px;">
    <h2>input包装组件</h2>
    <!-- 这里不要改为v-model  input事件执行的必须是赋值操作才有可能更改为v-model -->
    <input type="text" :value="value" @input="$emit('input',$event.target.value)">
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CustomInput',
  props: ['value']
}
</script>
