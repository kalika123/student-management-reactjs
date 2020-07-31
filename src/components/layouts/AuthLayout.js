import React, { Component } from 'react';

class AuthLayout extends Component {

    render() {
        return <>
            <div>{this.props.children}</div>
        </>
    }
    
}

export default AuthLayout;