import React, {Component} from 'react';

class Count extends Component {

    state = {count: 0}

    increment = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        //获取原来的和
        const {count} = this.state
        //更新状态(+value)
        this.setState({count: count + +value})
    }

    decrement = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        //获取原来的和
        const {count} = this.state
        //更新状态(+value)
        this.setState({count: count - +value})
    }

    incrementIfOdd = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        //获取原来的和
        const {count} = this.state
        if (count % 2 !== 0) {
            //更新状态(+value)
            this.setState({count: count + +value})
        }
    }

    incrementAsync = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        //获取原来的和
        const {count} = this.state
        setTimeout(() => {
            //更新状态(+value)
            this.setState({count: count + +value})
        }, 500)
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
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

export default Count;