<template>
    <div class="demo">
        <h1>{{message}}</h1>
        <h2 class="title">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>

export default {
    name: 'Student',
    data() {
        return {
            message: '学生信息',
            name: 'tom',
            sex: '男'
        };
    }
};
</script>

<style lang="less" scoped>
.demo{
    background-color: orange;
}
</style>