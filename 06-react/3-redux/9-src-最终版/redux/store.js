//该文件是整个redux中最为核心的store对象

//引入createStore，用于创建store对象
import {applyMiddleware, createStore, combineReducers} from 'redux'
//引入为Count组件服务的reducer，用于：初始化状态、加工状态
import count from './reducers/count'
import persons from './reducers/person'
//引入thunk用于支持异步action
import thunk from 'redux-thunk';
//引入
import {composeWithDevTools} from "redux-devtools-extension";

const allReducer = combineReducers({
    count,
    persons
})

//调用createStore创建并暴露store，注意：要传入为store服务的reducer
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))