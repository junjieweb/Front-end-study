import React, {Component} from 'react';
import PubSub from "pubsub-js";
import axios from "axios";

class Search extends Component {

    search = () => {
        const {keyWord} = this
        // 请求之前要：将List组件的isLoading变为true，将isFirst变为false
        // this.props.updateAppState({isLoading: true, isFirst: false})
        PubSub.publish('update_list_state', {isLoading: true, isFirst: false})

        axios.get(`http://localhost:3000/search/users2?q=${keyWord.value}`).then(
            response => {
                console.log('成功了', response.data)
                // 请求成功了要：存储用户信息，将将List组件isLoading变为false
                // this.props.updateAppState({isLoading: false, users: response.data.items})
                PubSub.publish('update_list_state', {isLoading: false, users: response.data.items})
            },
            error => {
                console.log('失败了', error)
                // 请求失败了要：存储错误信息，将将List组件isLoading变为false
                // this.props.updateAppState({isLoading: false, errorMsg: error.message})
                PubSub.publish('update_list_state', {isLoading: false, errorMsg: error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Github用户搜索案例</h3>
                <div>
                    <input ref={c => {
                        this.keyWord = c
                    }} type="text" placeholder="请输入用户名随后搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;
