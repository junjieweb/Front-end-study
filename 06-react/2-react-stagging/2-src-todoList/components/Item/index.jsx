import React, {Component} from 'react';
import './index.css'

class Item extends Component {

    state = {
        mouseIn: false // 标识鼠标是否在当前todo项中
    }

    // 勾选or取消勾选一个todo的回调
    handleCheck = (id) => {
        return ({target}) => {
            // 调用App传递过来的checkTodo
            this.props.checkTodo(id, target.checked)
        }
    }

    // 鼠标移入移出的回调
    handleMouse = (mouseIn) => {
        return () => {
            this.setState({mouseIn})
        }
    }

    // 删除按钮的问题
    handleDelete = (id) => {
        /* eslint-disable */
        if (confirm('确认删除吗？')) {
            this.props.deleteTodo(id)
        }
    }


    render() {
        const {id, name, done} = this.props
        const {mouseIn} = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}
                style={{background: mouseIn ? '#ddd' : 'white'}}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={() => {
                    this.handleDelete(id)
                }}
                        style={{display: mouseIn ? 'block' : 'none'}}>删除
                </button>
            </li>
        );
    }
}

export default Item;
