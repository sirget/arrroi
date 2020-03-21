import React, { Component } from 'react';
import InputField from './InputField'
class Register extends Component {
    render() {
        return (
            <div class="horizontal-center textS">
                <a href = "localhost:3000/arrroi" />
                <p class="title">
                    Register
                </p>
                <div class="box form-center border">
                    <form class="register" id="register" autoComplete = "off">
                        <InputField text="ชื่อจริง" />
                        <InputField text="นามสกุล" />
                        <InputField text="อีเมล์" />
                        <InputField text="บัญชีผู้ใช้" />
                        <InputField text="รหัสผ่าน" />
                        <div class = "size border">
                            <label class="register">
                                ที่อยู่
                            </label>
                            <textarea class="register" type="text">
                            </textarea>
                        </div>
                    </form>
                </div>
                <button class="textS login" type="submit" form="register">
                    ยืนยัน
                </button>
                
            </div >
        );
    }
}

export default Register;