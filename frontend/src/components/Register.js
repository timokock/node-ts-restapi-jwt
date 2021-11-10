import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleSubmit(event) {
        axios.post('http://localhost:4000/auth/register', {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        },
        )
        event.preventDefault();
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="container pt-4">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                        <input type="text" className="form-control" name="username" placeholder="Enter username" value={this.state.username} onChange={this.handleOnChange} required/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleOnChange} required/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Enter password" value={this.state.password} onChange={this.handleOnChange} required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
