import React, {Component} from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import './Sidebar.scss';


class Sidebar extends Component{

    state = {
        navs: [
            {
                name: 'Institutions',
                path: '/institutions'
            },
            {
                name: 'Statistics',
                path: '/statistics'
            },
            {
                name: 'Settings',
                path: '/settings'
            }
        ]
    }

    render(){
        
        return <div class="sidebar">
            <div>
                <img alt="dasda" src="images/student_management.png"></img>
            </div>
            <div class="divider"></div>
            <div class="nav-container">
                <Router>
                    {this.state.navs.map((nav) => {
                        return <Link to={nav.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div class="nav-item">
                               <div>{nav.name}</div>
                            </div>
                            </Link>
                    })}
                </Router>
            </div>
        </div>
    }

}

export default Sidebar;