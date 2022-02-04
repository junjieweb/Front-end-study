import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

class App extends Component {

    //初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: false},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '打豆豆', done: true},
            {id: '004', name: '学习', done: true},
        ]
    }

    //状态在哪里，操作状态的方法就在哪里
    addTodo = (todoObj) => {
        //获取原来的todos
        const {todos} = this.state
        //更新状态
        this.setState({todos: [todoObj, ...todos]})

        //不推荐下面的写法，因为如下写法通过非setState形式修改了state的值
        //因为如下写法，会导致某些情况下，状态不更新
        /*let {todos} = this.state
        todos.unshift(todoObj)
        this.setState({todos})*/
    }

    //勾选or取消勾选一个todo的回调
    checkTodo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((t) => {
            if (t.id === id) {
                return {...t, done}
            } else {
                return t
            }
        })
        this.setState({todos: newTodos})
    }

    //删除一个todo的回调
    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((t) => {
            return t.id !== id
        })
        this.setState({todos: newTodos})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={this.state.todos} checkTodo={this.checkTodo} deleteTodo={this.deleteTodo}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;