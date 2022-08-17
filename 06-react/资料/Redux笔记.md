## 1.求和案例_redux迷你版

(1).去除Count组件自身的状态
(2).src下建立:
            -src
                -redux
                    -store.js
                    -count_reducer.js
(3).store.js：
            1).引入redux中的createStore函数，创建一个store
            2).createStore调用时要传入一个为其服务的reducer
            3).记得暴露store对象
(4).count_reducer.js：
            1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
            2).reducer有两个作用：初始化状态，加工状态
            3).reducer被第一次调用时，是store自动触发的，传递的preState是undefined
(5).在index.js中检测store中状态的改变，一旦发生改变重新渲染<App/>
        备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

## 2.求和案例_redux完整版

新增文件：
    1.count_action.js 专门用于创建action对象
    2.constant.js 放置编码容易疏忽写错action中的type

## 3.求和案例_redux异步action版

(1).明确：延迟的动作不想交给组件自身，想交给action
(2).何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。
(3).具体编码：
        1).yarn add redux-thunk，并配置在store中
            //引入createStore，用于创建store对象：
            import {createStore,applyMiddleware} from 'redux'
            import countReducer from './count_reducer'
            import thunk from 'redux-thunk'
            export default createStore(countReducer,applyMiddleware(thunk))
        2).创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
        3).异步任务有结果后，分发一个同步的action去真正操作数据。
(4).备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。

## 4. 琳-补充

1.src文件
1.index.jsx 入口文件 需要引入
react react-dom App 渲染App store--自创键的store.js文件
import {Provider} from 'react-redux'
注意:渲染App组件时 使用如下方法之后 不需要传递store 默认所有组件间都有store
原来传递是<App store={store}/> 需要每个组件单独传递 推荐下面的

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root'))


2.App.jsx 最外层的组件 rcc  引入父容器 

3.containers 容器  每个组件都有一个单独的父容器 index.jsx
    1.引入子UI组件 下载react-redux 引入  用connect创造一个容器 connect(传递state函数,传递操作state状态函数)(UI组件)

4.components组件--按照每个组件单独创建文件夹 内有index.jsx
    例:components-Count-index.jsx
    index.jsx中正常通过this.props获取在父容器中方法调用
	

