<template>
    <div>
        <Student name="张三" :age="15" sex="女"></Student>
    </div>
</template>

<script>
import Student from './components/Student.vue';

export default {
    name: 'App',
    components:{
        Student
    }
};
</script>

<style scoped>

</style>