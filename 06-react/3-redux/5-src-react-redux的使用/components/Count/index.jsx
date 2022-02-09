//该文件是Count组件的UI组件，只负责：结构的呈现、交互等，不可以见到任何redux相关的API
import React, {Component} from 'react';

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
        console.log(this.props)
        return (
            <div>
                <h2>当前求和为：{this.props.sum}</h2>
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