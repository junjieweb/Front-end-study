import React, {Component} from 'react';
import './index.css'

class List extends Component {
    render() {
        const {users, isLoading, isFirst, errorMsg} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h1>欢迎使用</h1> :
                    isLoading ? <h1>Loading......</h1> :
                    errorMsg ? <h1>{errorMsg}</h1> :
                    users.map((userObj, index) => {
                        return (
                            <div className="card" key={index}>
                                <a href={userObj.html_url} target="_blank">
                                    <img src={userObj.avater_url} style={{width: '100px'}} alt='img'/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;