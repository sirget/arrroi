import React, {Component} from "react";
import RegisterField from "./RegisterField";
import Input from "./Input";
import information from "../images/information.png";
class Register extends Component {
	constructor() {
		super();
		this.state = {
			ชื่อจริง: "",
			นามสกุล: "",
			อีเมล: "",
			บัญชีผู้ใช้: "",
			รหัสผ่าน: "",
			ยืนยันรหัสผ่าน: "",
			ที่อยู่: "",
			เบอร์โทรศัพท์: "",
			error: {
				nameError: "",
				usernameError: "",
				surnameError: "",
				emailError: "",
				addressError: "",
				passwordError: "",
				confirmError: "",
				phoneError: ""
			}
		};
	}
	getData = (e, data) => {
		this.setState({
			[e.target.id]: data
		});
	};
	handleSubmit = (event) => {
		let error = this.state.error;
		let isError = false;
		event.preventDefault();
		error.usernameError =
			this.state.บัญชีผู้ใช้ === "" ? "กรุณากรอกบัญชีผู้ใช้" : "";
		error.passwordError =
			this.state.รหัสผ่าน === ""
				? "กรุณากรอกรหัสผ่าน"
				: this.state.รหัสผ่าน.length >= 8 &&
				  this.state.รหัสผ่าน.match(/[A-Z]+[a-z]+[0-9]+/g)
				? ""
				: "รหัสผ่านไม่ตรงตามรูปแบบที่กำหนด";
		error.surnameError =
			this.state.นามสกุล === "" ? "กรุณากรอกนามสกุล" : "";
		error.nameError = this.state.ชื่อจริง === "" ? "กรุณากรอกชื่อจริง" : "";
		error.emailError =
			this.state.อีเมล === ""
				? "กรุณากรอกอีเมล"
				: this.state.อีเมล.match(/@\./g)
				? ""
				: "อีเมลไม่ถูกต้อง";
		error.addressError =
			this.state.ที่อยู่ === "" ? "กรุณากรอกที่อยู่" : "";
		error.confirmError =
			this.state.ยืนยันรหัสผ่าน === ""
				? "กรุณายืนยันรหัสผ่าน"
				: this.state.ยืนยันรหัสผ่าน !== this.state.รหัสผ่าน
				? "รหัสผ่านที่ยืนยันไม่ตรงกับรหัสผ่านข้างต้น"
				: "";
		error.phoneError =
			this.state.เบอร์โทรศัพท์ === ""
				? "กรุณากรอกเบอร์โทรศัพท์"
				: this.state.เบอร์โทรศัพท์.length >= 9 &&
				  this.state.เบอร์โทรศัพท์.charAt(0) === "0"
				? ""
				: "เบอร์โทรศัพท์ไม่ถูกต้อง";
		isError =
			this.state.usernameError !== "" ||
			this.state.passwordError !== "" ||
			this.state.surnameError !== "" ||
			this.state.nameError !== "" ||
			this.state.addressError !== "" ||
			this.state.confirmError !== "" ||
			this.state.emailError !== "" ||
			this.state.phoneError !== ""
				? true
				: false;
		this.setState({error});
		if (isError) {
			return false;
		}
		this.props.history.push("/test");
		return true;
	};
	render() {
		return (
			<div className="horizontal-center textS">
				<p className="title">Register</p>
				<div
					style={{
						fontSize: "1.5vw",
						textAlign: "left",
						textIndent: "19vw",
						margin: "0px 0px 1.5vw 0px"
					}}
				>
					<span style={{color: "red"}}>**</span>
					<span style={{color: "#707070"}}>
						หากท่านต้องการคำแนะนำในการกรอกข้อมูลหัวข้อใด
						ท่านสามารถคลิกที่ไอคอน
					</span>
					<span>
						<img
							src={information}
							alt="info"
							style={{width: "1.6%", marginLeft: "0.6vw"}}
						/>
					</span>
				</div>
				<div className="form-register-center">
					<form
						className="register form-register-center"
						id="register"
						autoComplete="off"
						onSubmit={this.handleSubmit}
					>
						<RegisterField
							id="ชื่อจริง"
							display={this.state.error.nameError}
						>
							<Input
								className="register"
								type="text"
								id="ชื่อจริง"
								pass={this.getData}
								display={this.state.error.nameError}
								disabled={this.state.error.nameError === ""}
								maxLength="25"
								hidden={true}
							/>
						</RegisterField>
						<RegisterField
							id="นามสกุล"
							display={this.state.error.surnameError}
						>
							<Input
								className="register"
								type="text"
								id="นามสกุล"
								position="right"
								pass={this.getData}
								display={this.state.error.surnameError}
								disabled={this.state.error.surnameError === ""}
								maxLength="25"
								hidden={true}
							/>
						</RegisterField>
						<RegisterField
							id="อีเมล"
							display={this.state.error.emailError}
							hasIcon={true}
							info={"อีเมลต้องประกอบไปด้วยตัว @ และ ."}
						>
							<Input
								className="register"
								type="text"
								id="อีเมล"
								position="right"
								pass={this.getData}
								display={this.state.error.emailError}
								disabled={this.state.error.emailError === ""}
								maxLength="25"
								hidden={true}
							/>
						</RegisterField>
						<RegisterField
							id="บัญชีผู้ใช้"
							display={this.state.error.usernameError}
						>
							<Input
								className="register"
								type="text"
								id="บัญชีผู้ใช้"
								position="right"
								pass={this.getData}
								display={this.state.error.usernameError}
								disabled={this.state.error.usernameError === ""}
								maxLength="25"
								hidden={true}
							/>
						</RegisterField>
						<RegisterField
							id="รหัสผ่าน"
							info={
								"รหัสผ่านต้องประกอบด้วย\n- ความยาวอย่างน้อย 8 ตัวอักษร\n- ภาษาอังกฤษพิมพ์ใหญ่อย่างน้อย 1 ตัวอักษร\n- ภาษาอังกฤษพิมพ์เล็กอย่างน้อย 1 ตัวอักษร\n- ตัวเลขอย่างน้อย 1 ตัวอักษร"
							}
							hasIcon={true}
							display={this.state.error.passwordError}
						>
							<Input
								className="register"
								type="password"
								id="รหัสผ่าน"
								position="right"
								pass={this.getData}
								display={this.state.error.passwordError}
								disabled={this.state.error.passwordError === ""}
								maxLength="25"
								hidden={true}
							/>
						</RegisterField>

						<RegisterField
							id="ยืนยันรหัสผ่าน"
							display={this.state.error.confirmError}
						>
							<Input
								className="register"
								type="password"
								id="ยืนยันรหัสผ่าน"
								position="right"
								pass={this.getData}
								display={this.state.error.confirmError}
								disabled={this.state.error.confirmError === ""}
								maxLength="25"
								hidden={true}
							/>
						</RegisterField>

						<RegisterField
							id="เบอร์โทรศัพท์"
							display={this.state.error.phoneError}
						>
							<Input
								className="register"
								type="text"
								id="เบอร์โทรศัพท์"
								position="right"
								pass={this.getData}
								display={this.state.error.phoneError}
								disabled={this.state.error.phoneError === ""}
								maxLength="10"
								hidden={true}
							/>
						</RegisterField>
						<RegisterField
							id="ที่อยู่"
							display={this.state.error.addressError}
						>
							<Input
								className="register"
								type="text"
								id="ที่อยู่"
								position="right"
								pass={this.getData}
								display={this.state.error.addressError}
								disabled={this.state.error.addressError === ""}
                                maxLength="92"
								hidden={true}
							/>
						</RegisterField>
					</form>
					<button
						className="textS login"
						type="submit"
						form="register"
						style={{position: "absolute", top: "105%", left: "95%"}}
					>
                        ยืนยัน
					</button>
				</div>
			</div>
		);
	}
}

export default Register;
