import React, { Component } from 'react';
import LoginField from './LoginField';
import {withRouter} from 'react-router-dom';
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            usernameError: "",
            passwordError: ""
        }
    }
    getData = (e, data) => {
        this.setState({
            [e.target.id]: data
        });
        
    }
    handleSubmit = (event) => {
        let usernameError = "", passwordError = "",error = false;
        event.preventDefault();   
        console.log(event.target)     
        this.setState({
            usernameError:"",
            passwordError:""
        });  
        if (this.state.password === "") {
            this.setState({
                passwordError: "Password is required."
            });
            error =true;
        }
        if (this.state.username === "") {
            this.setState({
                usernameError: "Username is required."
            });
            error =true;
        }
        if(error) return false;
        console.log(this.state);
        this.props.history.push('/test');
        return true;
    }

    render() {
        return (
            <div class="horizontal-center textS">
                <p class="title">
                    Log in
                </p>
                <form id="login" class="box form-center" onSubmit={this.handleSubmit} autoComplete = "off">
                    <LoginField error={this.state.usernameError} type="text" id="username" text="Username" ref = "child" pass = {this.getData}/>
                    <LoginField error={this.state.passwordError} type="password" id="password" text="Password" ref = "child" pass = {this.getData}/>
                </form>
                <button class="textS login" onClick = {() => (this.props.history.push('/register'))}>
                    Register
                </button>
                <button class="textS login" type="submit" form="login" >
                    Log in
                </button>
            </div >
        );
    }
}

export default withRouter(Login);