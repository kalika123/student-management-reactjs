import React, { Component } from 'react';
import Sidebar from 'components/sidebar/Sidebar';
import Header from 'components/header/Header';

class AppLayout extends Component {
    render() {
        return <>
            <div className="wrapper-container">
                <div className="sidebar-container">
                    <Sidebar />
                </div>
                <div class="content">
                    <Header />
                    <div class="pages studman-card">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </>
    }
}

export default AppLayout;