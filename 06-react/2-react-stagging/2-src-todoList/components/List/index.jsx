import React, {Component} from 'react';
import Item from "../Item";
import './index.css'

class List extends Component {
    render() {
        const {todos, checkTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todoObj) => {
                        return <Item key={todoObj.id} {...todoObj} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}

export default List;