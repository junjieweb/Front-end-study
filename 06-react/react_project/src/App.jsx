import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom'
import './utils/rem'
import routes from "./config/routes";

class App extends Component {

    render() {
        return (
            <div>
                <Routes>
                    {routes.map(routeObj => <Route key={routeObj.path} {...routeObj}/>)}
                </Routes>
            </div>
        );
    }
}

export default App;