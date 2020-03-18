import React from 'react';
import background from '../images/BG.png'
const Start = () => (
    <div class="flex">
        <div class="container ">
            <img src={background} class="background" />
            <div class="center">
                <h1 class="title">
                    Let's go
                    <br />
                    shopping!
                </h1>
                <div style = {{padding: "15px 0 0 0"}}>
                    <button class="start">Start Now</button>
                </div>
            </div>
        </div>
    </div>
);

export default Start;
