import React, { Component } from 'react';
import Header from './layout/Header';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <Header title="Home" />
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;