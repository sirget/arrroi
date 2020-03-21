import React, { Component } from 'react';
import { useRouteMatch } from 'react-router-dom';
import {Tooltip as Tippy} from 'react-tippy';
class Register extends Component {
    constructor() {
        super()
        this.state = {
            text: "",
        }
    }
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
        this.props.pass(event,event.target.value);
    }
    render() {
        let image = (this.props.id === "username") ? "user" : (this.props.id === "password") ? "pass" : null;
        image = (this.props.error === "") ? image : image+" error";
        image = image+" login";
        let errorVisibility = (this.props.error === "") ? true : false;
        return (
            <div>
                <label class="left" for={this.props.id}>
                    {this.props.text}
                </label>
                <Tippy disabled = {errorVisibility} hideOnClick = "false" html = {<div class = "error">{this.props.error}</div>} arrow = "true" position = "right" arrowSize = "small" theme = "error">
                    <input class={image} type={this.props.type} id={this.props.id} value = {this.state.text} onChange={this.handleChange} />
                </Tippy>
            </div>
        );
    }
}

export default Register;