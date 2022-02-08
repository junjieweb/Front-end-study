import React, {Component} from 'react';
import Home from "./pages/Hmoe";
import About from "./pages/About";
import Header from "./components/Header";
import {NavLink, Routes, Route,Navigate} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/*原生html中，我们使用a标签进行页面的跳转*/}
                            {/*<a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a>*/}

                            {/*React中，使用Link进行路径的切换*/}
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*注册路由*/}
                                <Routes>
                                    <Route path="/about" element={<About/>}/>
                                    <Route path="/home" element={<Home/>}/>
                                    <Route path="*" element={<Navigate to="/about" />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;