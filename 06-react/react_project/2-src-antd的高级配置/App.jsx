import React, {Component} from 'react';
import {DatePicker, Button, Input, message} from 'antd';
import {WechatOutlined} from '@ant-design/icons';
// import './App.less'

class App extends Component {

    success = () => {
        message.success('确认成功', 1);
    }
    error = () => {
        message.error('删除失败', 3)
    }

    render() {
        return (
            <div>
                <button className="demo">点我</button>
                <Button onClick={this.success} type="primary">确认</Button>
                <Button onClick={this.error} type="danger">删除</Button>
                <DatePicker/>
                <WechatOutlined/>
                <Input placeholder="请输入内容" style={{width: '100px'}}/>
                <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite"/>
            </div>
        );
    }
}

export default App;