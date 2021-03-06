import React, {Component} from "react";
import RegisterField from "./RegisterField";
import Input from "./Input";
import information from "../images/information.png";
import {withRouter} from "react-router-dom";
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
				  this.state.รหัสผ่าน.match(/[A-Z]+/g) &&
				  this.state.รหัสผ่าน.match(/[a-z]+/g) &&
				  this.state.รหัสผ่าน.match(/[0-9]+/g)
				? ""
				: "รหัสผ่านไม่ตรงตามรูปแบบที่กำหนด";
		error.surnameError =
			this.state.นามสกุล === "" ? "กรุณากรอกนามสกุล" : "";
		error.nameError = this.state.ชื่อจริง === "" ? "กรุณากรอกชื่อจริง" : "";
		error.emailError =
			this.state.อีเมล === ""
				? "กรุณากรอกอีเมล"
				: this.state.อีเมล.match(/[@]+/g) &&
				  this.state.อีเมล.match(/[\.]+/g)
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
			error.usernameError !== "" ||
			error.passwordError !== "" ||
			error.surnameError !== "" ||
			error.nameError !== "" ||
			error.addressError !== "" ||
			error.confirmError !== "" ||
			error.emailError !== "" ||
			error.phoneError !== ""
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
								type="text"
								id="ชื่อจริง"
								pass={this.getData}
								display={this.state.error.nameError}
								disabled={this.state.error.nameError === ""}
								maxLength="25"
								hidden={true}
                                placeholder="สมชาย"
                                default=""
							/>
						</RegisterField>
						<RegisterField
							id="นามสกุล"
							display={this.state.error.surnameError}
						>
							<Input
								type="text"
								id="นามสกุล"
								pass={this.getData}
								display={this.state.error.surnameError}
								disabled={this.state.error.surnameError === ""}
								maxLength="25"
								hidden={true}
								placeholder="รักชาติ"
                                default=""
							/>
						</RegisterField>
						<RegisterField
							id="อีเมล"
							display={this.state.error.emailError}
						>
							<Input
								type="text"
								id="อีเมล"
								pass={this.getData}
								disabled={this.state.error.emailError === ""}
								maxLength="25"
								hidden={true}
								placeholder="test@example.com"
                                default=""
							/>
						</RegisterField>
						<RegisterField
							id="บัญชีผู้ใช้"
							display={this.state.error.usernameError}
						>
							<Input
								type="text"
								id="บัญชีผู้ใช้"
								pass={this.getData}
								disabled={this.state.error.usernameError === ""}
								maxLength="25"
								hidden={true}
								placeholder="example_01"
                                default=""
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
								type="password"
								id="รหัสผ่าน"
								pass={this.getData}
								disabled={this.state.error.passwordError === ""}
								maxLength="25"
								hidden={true}
								placeholder="Ex123456789"
                                default=""
							/>
						</RegisterField>

						<RegisterField
							id="ยืนยันรหัสผ่าน"
							display={this.state.error.confirmError}
						>
							<Input
								type="password"
								id="ยืนยันรหัสผ่าน"
								pass={this.getData}
								disabled={this.state.error.confirmError === ""}
								maxLength="25"
								hidden={true}
								placeholder="Ex123456789"
                                default=""
							/>
						</RegisterField>

						<RegisterField
							id="เบอร์โทรศัพท์"
							display={this.state.error.phoneError}
						>
							<Input
								type="text"
								id="เบอร์โทรศัพท์"
								pass={this.getData}
								disabled={this.state.error.phoneError === ""}
								maxLength="10"
								hidden={true}
								placeholder="0899199218"
                                default=""
							/>
						</RegisterField>
						<RegisterField
							id="ที่อยู่"
							display={this.state.error.addressError}
						>
                            <Input
                                default=""
								type="text"
								id="ที่อยู่"
								pass={this.getData}
								disabled={this.state.error.addressError === ""}
								maxLength="92"
								hidden={true}
								placeholder="99/99 หมู่ 9 ถนนสายไหม ต.จัดสรร อ.เมือง จ.อาหาร"
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

export default withRouter(Register);
