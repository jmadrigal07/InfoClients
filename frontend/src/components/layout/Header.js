import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header-content p-2">
                <span>{this.props.title.toUpperCase()}</span>
            </div>
        );
    }
}

export default Header;