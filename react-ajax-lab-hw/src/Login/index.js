import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} name="username" value={this.state.username} placeholder="username"/>
                <input type="password" onChange={this.handleChange} name="password" value={this.state.password} placeholder="password"/>
                <input type="submit" value="Login"/>
            </form>
        )
    }
}
export default Login;