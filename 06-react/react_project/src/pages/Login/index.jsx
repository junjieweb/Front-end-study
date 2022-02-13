//登录组件
import React, {Component} from 'react';
import {NavBar, Input, Form, Button, Space, Divider, Avatar, Toast} from 'antd-mobile'
import github from './images/github.png'
import qq from './images/qq.png'
import wechat from './images/wechat.png'
import {phoneReg, verifyCodeReg} from "../../utils/reg";
import {reqVerifyCode, reqLogin} from '../../api'
import './index.css'

class Login extends Component {

    state = {
        phone: '',
        verifyCode: '',
        time: 60,
        canClick: true
    }

    saveData = (type) => {
        return (value) => {
            //如果用户输入的数据，符合要求，那么维护进状态
            if (type === 'phone' && phoneReg.test(value)) return this.setState({[type]: value})
            if (type === 'verifyCode' && verifyCodeReg.test(value)) return this.setState({[type]: value})
            this.setState({[type]: ''})
        }
    }

    //获取验证码的回调
    getVerifyCode = async () => {
        //获取手机号、按钮状态
        const {phone, canClick} = this.state
        //如果按钮不可点击，终止逻辑
        if (!canClick) return
        //校验手机号
        if (!phone) return Toast.show('手机号格式不合法');
        //更新状态让获取验证码按钮不可点击
        this.setState({canClick: false})
        //开启定时器更新倒计时
        this.timer = setInterval(() => {
            let {time} = this.state
            time--
            //若倒计时结束
            if (time <= 0) {
                clearInterval(this.timer)
                return this.setState({canClick: true, time: 60})
            }
            this.setState({time})
        }, 1000)
        //发送请求
        await reqVerifyCode(phone)
        Toast.show('验证码发送成功')
    }

    //登录的回调
    login = async () => {
        //获取手机号，验证码
        const {phone, verifyCode} = this.state
        if (!(phone && verifyCode)) return Toast.show('请检查手机号或验证码格式');
        const result = await reqLogin(phone, verifyCode)
        const {code, message} = result
        if (code === 20000) {
            Toast.show('登录成功！')
            console.log(this)
            this.props.history.push('/user')
        } else Toast.show(message)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    githubLogin = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=908ba7f76c6df2f6ac33'
    }

    render() {
        const {time, canClick, phone, verifyCode} = this.state
        return (
            <div className="login">
                {/*顶部导航区*/}
                <NavBar backArrow={false}>手机验证码登录</NavBar>
                {/*手机验证码*/}
                <Form.Item className="phone">
                    <Input onChange={this.saveData('phone')} placeholder='请输入手机号' clearable/>
                </Form.Item>
                <Form.Item
                    className="phone"
                    extra={
                        <div className="styles.extraPart">
                            <a
                                onTouchStart={this.getVerifyCode}>
                                发送验证码{canClick ? '' : `(${time})`}</a>
                        </div>
                    }>
                    <Input onChange={this.saveData('verifyCode')} placeholder='请输入验证码' clearable/></Form.Item>
                {/*登录按钮*/}
                <Button
                    onClick={this.login}
                    type="primary"
                    disabled={(!(phone && verifyCode))}
                    block color="primary" size='large'>
                    登录</Button>
                {/*底部其他区域*/}
                <Space direction='vertical' style={{'--gap': '80px'}}></Space>
                <Divider style={{
                    color: 'gray',
                    borderStyle: 'solid',
                    fontSize: '20px'
                }}>其他登录方式</Divider>
                <Space block wrap border-radius justify='center'>
                    <Avatar onTouchEnd={this.githubLogin} src={github}/>
                    <Avatar src={qq}/>
                    <Avatar src={wechat}/>
                </Space>
                <span className="s1">未注册的手机号，验证后会自动创建硅谷账号，登录即代表您同意：
					<a href="http://www.atguigu.com">《硅谷隐私政策》</a>
					</span>
            </div>
        );
    }
}

export default Login;