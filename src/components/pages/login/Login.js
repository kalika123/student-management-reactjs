import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

import './Login.scss';

class Login extends Component {

    constructor(){
        super();
        this.state = {
            email: 'kovacs',
            password: ''
        }
    }

    handleChange = (field, event) => {
        this.setState({[field]: event.target.value});
    }

    login = () => {

       const credentials = {
            email: this.state.email,
            password: this.state.password
       }

       axios.post(`http://student-man/api/auth/login`, credentials)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }

    render() {
        return <>
            <div className="auth-container">
                <div className="login-box">
                    <h4>Sign In</h4>
                    <div className="form-body">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" value={this.state.email} onChange={ e => this.handleChange('email', e)} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" value={this.state.password} onChange={ e => this.handleChange('password', e)} placeholder="Password" />
                            </Form.Group>
                            <Button className="mt-2" variant="primary" onClick={this.login}>
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Login;