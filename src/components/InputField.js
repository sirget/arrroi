import React from 'react'

const InputField = (props) => (
    <div class = "border">
        <div class = "size border">                
            <label class="register">
                {props.text}
            </label>
        </div>
        <div class = "a">            
            <input class="register" type="text" />
        </div>
    </div>
);
export default InputField;