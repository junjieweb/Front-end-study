import React, {Component} from 'react';
import Search from "./components/Seatch";
import List from "./components/List";

class App extends Component {

    state = {
        users: [], // 用户信息
        isLoading: false, // 用于标识是否处于加载中
        isFirst: true, // 标识是否初次展示
        errorMsg: '' // 错误信息
    }

    // 更新App的状态
    updateAppState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;
