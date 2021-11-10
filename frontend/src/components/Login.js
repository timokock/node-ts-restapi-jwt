import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        const { email, password } = this.state;
        axios.post(
            "http://localhost:4000/auth/login",
            {
                email: email,
                password: password
            })
            .then(response => {console.log(response.headers)})

            .catch(error => {console.log(error)}
        );
        e.preventDefault();
    }

    render() {
        return (
            <div className="container pt-4">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}