import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import MainScreen from './components/Main';

class App extends Component {
    constructor() {
        super();
        this.state = {
            test: 'test'
        }
    }

    _click = () => {
        this.setState({test: 'new Value'});
    };

    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/show'>Show Test Value</Link></li>
                            <li><Link to='/change'>Change Test Value</Link></li>
                        </ul>
                    </nav>
                </header>
                <MainScreen />
            </div>
        );
    }
}

export default App;
