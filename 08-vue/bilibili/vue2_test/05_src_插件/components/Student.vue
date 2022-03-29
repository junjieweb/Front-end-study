<template>
    <div>
        <h1>{{message}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <input type="text" v-fbind:value="name">
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

<style scoped>

</style>