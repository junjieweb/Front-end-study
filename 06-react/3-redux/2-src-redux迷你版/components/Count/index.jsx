import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {

    state = {name: 'tom'}

    increment = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        store.dispatch({type: 'increment', data: +value})
    }

    decrement = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        store.dispatch({type: 'decrement', data: +value})
    }

    incrementIfOdd = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        if (store.getState() % 2 !== 0) {
            store.dispatch({type: 'increment', data: +value})
        }
    }

    incrementAsync = () => {
        //获取用户选择的数字
        const {value} = this.checkNumber
        setTimeout(() => {
            store.dispatch({type: 'increment', data: +value})
        }, 500)
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
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