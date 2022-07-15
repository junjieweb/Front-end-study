//个人中心组件
import React, {Component} from 'react'
import {Toast, NavBar, Button} from 'antd-mobile'
import {reqVerifyToken, reqLogout} from '../../api'
import './index.css'

export default class UserCenter extends Component {

    state = {
        nickName: '',
        phone: '',
        avatar: '',
        _id: ''
    }

    logout = async () => {
        await reqLogout(this.state._id)
        this.props.history.replace('/login')
    }

    async componentDidMount() {
        const result = await reqVerifyToken()
        const {code, message, data} = result
        if (code !== 20000) {
            Toast.show(message)
            this.props.history.replace('/login')
        } else {
            const {nickName, phone, avatar} = data
            this.setState({nickName, phone, avatar})
        }
    }

    render() {
        const {nickName, avatar} = this.state
        return (
            <div className="user-info">
                <NavBar mode="light">个人中心</NavBar>
                <img className="avatar" src={avatar} alt=""/>
                <div className="nick-name">昵称：{nickName}</div>
                <Button onTouchEnd={this.logout} type="primary">退出登录</Button>
            </div>
        )
    }
}
