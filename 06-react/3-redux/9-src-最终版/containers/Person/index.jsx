import React, {Component} from 'react';
import {connect} from "react-redux";
import {addPerson} from "../../redux/actions/person";

class Person extends Component {

    add = () => {
        const {nameNode, ageNode} = this
        // console.log(nameNode.value, ageNode.value)
        this.props.addPerson({id: Date.now(), name: nameNode.value, age: ageNode.value})
    }

    render() {
        return (
            <div>
                <h3>我是Person组件,上方组件求和为:{this.props.count}</h3>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        this.props.persons.map((personObj) => {
                            return <li key={personObj.id}> {personObj.name}----{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        persons: state.persons,
        count: state.count
    }),
    {addPerson}
)(Person)