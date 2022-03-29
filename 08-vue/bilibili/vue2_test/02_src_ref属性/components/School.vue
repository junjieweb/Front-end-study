<template>
    <div>
        <h1>学校名称：{{name}}</h1>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name:'bilibili',
        };
    }
};
</script>

<style scoped>
div{
    background: rebeccapurple;
}
</style>