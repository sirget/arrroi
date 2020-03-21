import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super()
        this.state = {
            text: "border"
        }
    }
    render() {
        return (
            <div align = "center">
                <h1>Login successful!</h1>
            </div>
        );
    }
}

export default Test;