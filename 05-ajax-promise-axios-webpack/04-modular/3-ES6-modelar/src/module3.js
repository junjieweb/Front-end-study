//module3中使用统一暴露
const school = 'sgg';
const person = {
    name: 'tom',
    age: 18,
    sex: '男'
}

function getTom() {
    console.log(person);
}

//统一暴露（精简版）---用的多
export {school, person, getTom};

//统一暴露（完整版）
// export {school as a,person as b,getTom as c};