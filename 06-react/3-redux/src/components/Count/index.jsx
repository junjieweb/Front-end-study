import React, {Component} from 'react';
import ReactDom from "react-dom";

/*
	Hooks

	1. React Hook/Hooks是什么?
		(1). Hook是React 16.8.0版本增加的新特性/新语法
		(2). 可以让你在函数组件中使用 state 以及其他的 React 特性

	2. 常用的几个Hook
		(1). State Hook: React.useState()
		(2). Effect Hook: React.useEffect()
		(3). Ref Hook: React.useRef()


	3. State Hook
			(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
			(2). 语法: const [xxx, setXxx] = React.useState(initValue)
			(3). useState()说明:
							参数: 第一次初始化指定的值在内部作缓存
							返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
			(4). setXxx()2种写法:
							setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
							setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值


	4. Effect Hook
		(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
		(2). React中的副作用操作:
						发ajax请求数据获取
						设置订阅 / 启动定时器
						手动更改真实DOM
		(3). 语法和说明:
						useEffect(() => {
							// 在此可以执行任何带副作用操作
							return () => { // 在组件卸载前执行
								// 在此做一些收尾工作, 比如清除定时器/取消订阅等
							}
						}, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行

		(4). 可以把 useEffect Hook 看做如下三个函数的组合
						componentDidMount()
						componentDidUpdate()
						componentWillUnmount()

	5. Ref Hook
			(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
			(2). 语法: const refContainer = useRef(initialValue)
			(3). 作用:保存标签对象,功能与React.createRef()一样
*/

//定义个Count组件（类式组件）
/*class Count extends Component {

    state = {count: 0}

    myRef = React.createRef()

    add = () => {
        const {count} = this.state
        this.setState({count: count + 1})
    }
    death = () => {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }
    show = () => {
        alert(this.myRef.current.value)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const {count} = this.state
            this.setState({count: count + 1})
        }, 1000)
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <input ref={this.myRef} type="text"/>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.death}>卸载组件</button>
                <button onClick={this.show}>点我提示输入输入的内容</button>
            </div>
        );
    }
}*/

//定义一个Count组件（函数式组件）
function Count() {
    console.log('Count')//1 + n次
    // let inputNode
    // let myRef = React.createRef()
    let myRef = React.useRef()

    const [count, setCount] = React.useState(0)

    function add() {
        // setCount(count + 1)//此种写法虽简单，但是不要在回调中使用，会造成状态不更新！！！
        setCount(count => count + 1)
    }

    function death() {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }

    function show() {
        console.log(myRef)
        alert(myRef.current.value)
    }

    //使用React.useEffect，可以在函数式组件中使用生命周期钩子
    //useEffect传入的第一个参数，相当与componentDidMount和componentDidUpdate
    React.useEffect(() => {
        console.log('componentDidMount')
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        //return的这个函数，相当与componentWillUnmount
        return () => {
            console.log('componentWillUnmount')
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <h2>当前求和为：{count}</h2>
            <input ref={myRef} type="text"/>
            <button onClick={add}>点我+1</button>
            <button onClick={death}>卸载组件</button>
            <button onClick={show}>点我提示输入输入的内容</button>
        </div>
    );
}

export default Count;