<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
// import {myMixin,myMixin2} from '../mixin';

export default {
    name: 'School',
    data() {
        return {
            name: 'bilibili',
            address: '北京'
        };
    },
    // mixins:[myMixin,myMixin2]
};
</script>

<style scoped>

</style>