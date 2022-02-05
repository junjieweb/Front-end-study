import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import './index.css'

class Header extends Component {

    //按下键盘的回调
    handleKeyUp = (event) => {
        const {keyCode, target} = event
        //如果按下的不是回车，逻辑停止
        if (keyCode !== 13) return
        //获取用户的输入，解构赋值的同时重命名
        const {value: name} = target
        //构建一个todoObj
        const todoObj = {id: nanoid(), name, done: false}
        //调用父组件传递过来的addTodo
        this.props.addTodo(todoObj)
        //清空用户输入
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Header;