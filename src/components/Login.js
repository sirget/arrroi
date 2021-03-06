import React, {Component} from "react";
import LoginField from "./LoginField";
import {withRouter} from "react-router-dom";
import Input from "./Input";
class Login extends Component {
	constructor() {
		super();
		this.state = {
			Email: "",
			Password: "",
			error: {
				emailError: "",
				passwordError: ""
			}
		};
	}
	getData = (e, data, what = true) => {
		if (what)
			this.setState({
				[e.target.id]: data
			});
		else
			this.setState({
				[e.id]: data
			});
	};
	handleSubmit = (event) => {
		let error = this.state.error;
		let isError = false;
		event.preventDefault();
		error.emailError = this.state.Email === "" ? "Email is required." : "";
		error.passwordError =
			this.state.Password === "" ? "Password is required." : "";
		isError =
			error.emailError !== "" || error.passwordError !== ""
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
				<p className="title">Log in</p>
				<form
					id="login"
					className="form-login-center"
					onSubmit={this.handleSubmit}
					autoComplete="off"
				>
					<LoginField id="Email">
						<Input
							id="Email"
							pass={this.getData}
							position="right"
							disabled={this.state.error.emailError === ""}
							maxLength="25"
							display={this.state.error.emailError}
							type="text"
                            style={{ top: "-2.8vw", left: "37.6vw" }}
                            default=""
						/>
					</LoginField>
					<LoginField id="Password">
						<Input
							id="Password"
							pass={this.getData}
							disabled={this.state.error.passwordError === ""}
							display={this.state.error.passwordError}
							position="right"
							maxLength="30"
							type="password"
							style={{top: "-3.3vw", left: "37vw"}}
                            default=""
						/>
					</LoginField>
				</form>
				<button
					className="textS login"
					onClick={() => this.props.history.push("/register")}
				>
					Register
				</button>
				<button className="textS login" type="submit" form="login">
					Log in
				</button>
			</div>
		);
	}
}

export default withRouter(Login);
