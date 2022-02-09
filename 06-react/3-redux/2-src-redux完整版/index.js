import React from "react";
import ReactDom from 'react-dom'
import App from './App'
import store from "./redux/store";

ReactDom.render(<App/>, document.getElementById('root'))

//检测redux中状态的改变
store.subscribe(() => {
    ReactDom.render(<App/>, document.getElementById('root'))
})