export const myMixin = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊！')
    },
}
export const myMixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}