import React, {Component} from 'react';
import {Button} from 'antd-mobile'
import './index.css'

class App extends Component {

    render() {
        return (
            <div>
                <Button>点我</Button>
                <Button color='primary'>Primary</Button>
                <Button color='success'>Success</Button>
                <Button color='danger'>Danger</Button>
                <Button color='warning'>Warning</Button>
                <Button block color='primary' size='large'>
                    Block Button
                </Button>
                <Button shape='default' color='primary'>
                    Default Button
                </Button>
                <Button block shape='rounded' color='primary'>
                    Rounded Button
                </Button>
                <Button block shape='rectangular' color='primary'>
                    Rectangular Button
                </Button>
                <Button loading color='primary' loadingText='加载中'>
                    Loading
                </Button>
                <Button loading>Loading</Button>
            </div>
        );
    }
}

export default App;