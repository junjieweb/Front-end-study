//该文件是整个redux中最为核心的store对象

//引入createStore，用于创建store对象
import {createStore} from 'redux'
//引入为Count组件服务的reducer，用于：初始化状态、加工状态
import count_reducer from './count_reducer'

//调用createStore创建并暴露store，注意：要传入为store服务的reducer
export default createStore(count_reducer)