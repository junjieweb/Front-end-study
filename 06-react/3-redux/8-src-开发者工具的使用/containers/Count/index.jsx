import React, {Component} from 'react';
//引入action
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
} from "../../redux/actions/count";
//引入connect用于连接UI与redux，且connect()()可以生成容器组件
import {connect} from "react-redux";

class Count extends Component {

    state = {name: 'tom'}

    increment = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        this.props.add(+value)
    }

    decrement = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        this.props.reduce(+value)
    }

    incrementIfOdd = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        if (this.props.sum % 2 !== 2) {
            this.props.add(+value)
        }
    }

    incrementAsync = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        this.props.addAsync(+value)
    }

    render() {
        // console.log(this.props)
        // console.log(this.props.sum)
        return (
            <div>
                <h3>我是Count组件,下方组件总人数为：{this.props.renCount}</h3>
                <h4>当前求和为：{this.props.sum}</h4>
                <select ref={c => this.checkNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>奇数再+</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        );
    }
}

//创建出来一个容器组件
export default connect(
    //映射状态
    state => {
        return {
            sum:state.sum,
            renCount:state.yiduiren.length
        }
    },

    //映射操作状态的方法
    /*dispatch => ({
        add: number => dispatch(createIncrementAction(number)),
        reduce: number => dispatch(createDecrementAction(number)),
        addAsync: number => dispatch(createIncrementAsyncAction(number))
    })*/

    {
        add: createIncrementAction,
        reduce: createDecrementAction,
        addAsync: createIncrementAsyncAction
    }
)(Count)