import React, {Component} from 'react';
import PubSub from "pubsub-js";
import axios from "axios";

class Search extends Component {

    search = async () => {
        const {keyWord} = this
        PubSub.publish('update_list_state', {isLoading: true, isFirst: false})

        //使用axios发送请求
        /*axios.get(`http://localhost:3000/search/users2?q=${keyWord.value}`).then(
            response => {
                console.log('成功了', response.data)
                PubSub.publish('update_list_state',{isLoading:false,users:response.data.items})
            },
            error => {
                console.log('失败了', error)
                PubSub.publish('update_list_state',{isLoading:false,errorMsg:error.message})
            }
        )*/

        //使用fetch发送请求
        /*fetch(`http://localhost:3000/search/users2?q=${keyWord.value}`)
            .then(
                response => {
                    console.log('联系服务器成功了', response)
                    return response.json()
                }
            )
            .then(
                response => {
                    console.log('获取数据成功了', response)
                }
            )
            .catch(
                error => {
                    console.log('请求失败了', error)
                }
            )*/

        //fetch配合async与await使用
        /*try {
            const response = await fetch(`http://localhost:3000/search/users2?q=${keyWord.value}`)
            const result = await response.json()
            console.log(result);
        } catch (error) {
            console.log('失败了', error);
        }*/

        //axios配合async与await使用
        try {
            const result = await axios.get(`http://localhost:3000/search/users2?q=${keyWord.value}`)
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }

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