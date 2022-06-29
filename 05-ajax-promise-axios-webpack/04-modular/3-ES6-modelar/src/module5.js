//使用 分别暴露
export const teacher1 = {name: '强哥', age: 18}
export const teacher2 = {name: '歌神', age: 28}

//使用 统一暴露
const stu1 = {name: '张三', age: 12}
const stu2 = {name: '李四', age: 23}
export {stu1, stu2}

//使用 默认暴露
export default {
    school: 'sgg',
    address: 'hf',
    subjects: ['web', 'java', 'c++']
}