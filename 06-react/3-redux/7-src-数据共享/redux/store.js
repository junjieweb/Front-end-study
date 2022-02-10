//该文件是整个redux中最为核心的store对象

//引入createStore，用于创建store对象
import {applyMiddleware, createStore, combineReducers} from 'redux'
//引入为Count组件服务的reducer，用于：初始化状态、加工状态
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//引入thunk用于支持异步action
import thunk from 'redux-thunk';

const allReducer = combineReducers({
    sum: countReducer,
    yiduiren: personReducer
})

//调用createStore创建并暴露store，注意：要传入为store服务的reducer
export default createStore(allReducer, applyMiddleware(thunk))