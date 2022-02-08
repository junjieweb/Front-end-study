import React, {Component} from 'react';
import Message from "./Message";
import News from "./News";
import {NavLink, Routes, Route, Outlet} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to="/home/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                    </li>
                </ul>
                <div>
                    {/*注册路由*/}
                    <Routes>
                        <Route path="news" element={<News/>}/>
                        <Route path="message" element={<Message/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

export default Home;