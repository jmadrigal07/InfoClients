import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navLeft">
                <Link to="/home">
                    <i className="icons fas fa-home"></i>
                </Link>
                <Link to="/customers">
                    <i className="icons fas fa-users"></i>
                </Link>
                <Link to="/reports">
                        <i className="icons fas fa-chart-bar"></i>
                </Link>
            </div>
        );
    }
}

export default Navbar;