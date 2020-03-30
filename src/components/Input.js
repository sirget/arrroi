import React, {Component} from "react";
import {Tooltip as Tippy} from "react-tippy";

class Input extends Component {
	constructor() {
		super();
		this.state = {
			text: "",
			open: false,
			isFocused: false
		};
	}
	handleChange = (event) => {
		this.setState({
			text: event.target.value
		});
		this.props.pass(event, event.target.value);
	};
	handleClick = (event) => {
		let x = document.getElementById("Password");
		let y = document.getElementById("Username");
		if (event.target.id === "Password icon") {
			if (x.type === "password") {
				event.target.className = "login-showPassword showPassword";
				x.type = "text";
			} else if (x.type === "text") {
				event.target.className = "login-hidePassword hidePassword";
				x.type = "password";
			}
		}
		if (event.target.id === "Username icon") {
			this.setState({
				text: ""
			});
			this.props.pass(y, "", false);
		}
	};
	checkInput = (event) => {
		switch (event.target.id) {
			case "Password":
			case "รหัสผ่าน":
			case "ยืนยันรหัสผ่าน":
				if (!/[0-9A-Za-z]+/g.test(event.key)) event.preventDefault();
				break;
			case "Username":
			case "บัญชีผู้ใช้":
				if (!/[\w]+/g.test(event.key)) event.preventDefault();
				break;
			case "อีเมล":
				if (
					!/[A-Za-z0-9!#$%&"'*+-/=?^_`{|}~(),:;<>@[\].]+/g.test(
						event.key
					)
				)
					event.preventDefault();
				break;
			case "เบอร์โทรศัพท์":
				console.log(event.key);
				if (
					!/[\d]+/g.test(event.key) &&
					event.key !== "ArrowLeft" &&
					event.key !== "ArrowRight" &&
					event.key !== "Backspace" &&
					event.key !== "Tab" &&
					event.key !== "Enter" &&
					event.key !== "Delete"
				)
					event.preventDefault();
				break;
			case "ที่อยู่":
				if (
					!/[\u0E00-\u0E7F0-9A-Za-z\s\./]+/g.test(event.key) ||
					event.key === "Enter"
				)
					event.preventDefault();
				break;
			default:
				if (!/[\u0E00-\u0E7FA-Za-z]+/g.test(event.key))
					event.preventDefault();
				break;
		}
	};

	render() {
		if (this.props.id === "ที่อยู่")
			return (
				<textarea
					className={
						this.props.className +
						(this.props.display === "" ? "" : " error")
					}
					onPaste={(event) => {
						event.preventDefault();
					}}
					type={this.props.type}
					id={this.props.id}
					value={this.state.text}
					onChange={this.handleChange}
					maxLength={this.props.maxLength}
					onKeyDown={this.checkInput}
					onMouseEnter={() => {
						this.setState({open: true});
					}}
					onFocus={() => {
						this.setState({open: true, isFocused: true});
					}}
					onBlur={() => {
						this.setState({open: false, isFocused: false});
					}}
					onMouseOut={() => {
						if (!this.state.isFocused) this.setState({open: false});
					}}
				/>
			);
		else if (this.props.hidden)
			return (
				<input
					maxLength={this.props.maxLength}
					className={
						this.props.className +
						(this.props.display === "" ? "" : " error")
					}
					onPaste={(event) => {
						event.preventDefault();
					}}
					type={this.props.type}
					id={this.props.id}
					value={this.state.text}
					onChange={this.handleChange}
					onKeyDown={this.checkInput}
				/>
			);
		else
			return (
				<>
					<Tippy
						disabled={this.props.disabled}
						position={this.props.position}
						arrow="true"
						arrowSize="small"
						theme="error"
						open={this.state.open}
						html={<div className="error">{this.props.display}</div>}
						style={{width: "100%", height: "10%"}}
					>
						<input
							onPaste={(event) => {
								event.preventDefault();
							}}
							maxLength={this.props.maxLength}
							className={
								(this.props.className == null
									? this.props.id === "Username"
										? "user"
										: "pass"
									: this.props.className) +
								(this.props.display === "" ? "" : " error")
							}
							onMouseEnter={() => {
								this.setState({open: true});
							}}
							onFocus={() => {
								this.setState({open: true, isFocused: true});
							}}
							onBlur={() => {
								this.setState({open: false, isFocused: false});
							}}
							onMouseOut={() => {
								if (!this.state.isFocused)
									this.setState({open: false});
							}}
							type={this.props.type}
							id={this.props.id}
							value={this.state.text}
							onChange={this.handleChange}
							onKeyDown={this.checkInput}
						/>
					</Tippy>
					<div className="row-flex">
						<button
							type="button"
							id={this.props.id + " icon"}
							className={
								this.props.id === "Username"
									? "login-close close"
									: "login-hidePassword hidePassword"
							}
							style={this.props.style}
							onClick={this.handleClick}
						/>
					</div>
				</>
			);
	}
}

export default Input;
