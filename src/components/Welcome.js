import React, {Component} from 'react';
import background from '../images/BG.png'
import { withRouter } from 'react-router-dom';
class Welcome extends Component {
    render() {
        return (
            <div class="column-flex">
                <div class="container">
                    <img src={background} class="background" />
                    <div class="vertical-center">
                        <h1 class="title">
                            Let's go
                        <br />
                        shopping!
                        </h1>
                        <div style={{ padding: "15px 0 0 0" }}>
                            <button class="start" onClick={() => (this.props.history.push('/home'))}>Start Now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Welcome);
