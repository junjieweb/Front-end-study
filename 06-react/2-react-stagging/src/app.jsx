import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

    getStudentList = () => {
        axios.get('http://localhost:3000/students').then(
            response => {
                console.log('成功了', response)
            },
            error => {
                console.log('失败了', error)
            }
        )
    }

    getCarList = () => {
        axios.get('http://localhost:3000/cars').then(
            response => {
                console.log('成功了', response)
            },
            error => {
                console.log('失败了', error)
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentList}>点我获取一些学生的数据</button>
                <button onClick={this.getCarList}>点我获取一些汽车的数据</button>
            </div>
        );
    }
}

export default App;