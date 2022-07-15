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
                                    {/*<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;*/}

                                    {/* 跳转路由时携带search参数 */}
                                    <Link
                                        to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Routes>
                    {/* 注册路由时，声明接收params参数 */}
                    {/*<Route path="detail" element={<Detail/>}/>*/}
                    {/*<Route path="detail/:id/:title" element={<Detail/>}/>*/}

                    {/* 注册路由时，如果携带的是search参数，无需声明接收，直接注册即可 */}
                    <Route path="detail" element={<Detail/>}/>
                </Routes>
            </div>
        );
    }
}

export default Message;
