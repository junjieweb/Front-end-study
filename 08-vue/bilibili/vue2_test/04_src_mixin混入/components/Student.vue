<template>
    <div>
        <h1>{{message}}</h1>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
// import {myMixin,myMixin2} from '../mixin';

export default {
    name: 'Student',
    data() {
        return {
            message: '学生信息',
            name: 'tom',
            sex: '男'
        };
    },
    // mixins:[myMixin,myMixin2]
};
</script>

<style scoped>

</style>