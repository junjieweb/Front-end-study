import React, {Component} from 'react';
import {Link, Routes, Route} from "react-router-dom";
import Detail from "./Detail";

class Message extends Component {
    state = {
        messageArr: [
            {id: '001', title: '消息1'},
            {id: '002', title: '消息2'},
            {id: '003', title: '消息3'},
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 跳转路由时携带params参数 */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Routes>

                    {/* 注册路由时，声明接收params参数 */}
                    <Route path="detail" element={<Detail/>}/>
                    <Route path="detail/:id/:title" element={<Detail/>}/>
                </Routes>
            </div>
        );
    }
}

export default Message;