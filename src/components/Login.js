import React, {Component} from "react";
import LoginField from "./LoginField";
import {withRouter} from "react-router-dom";
import Input from "./Input";
class Login extends Component {
	constructor() {
		super();
		this.state = {
			Username: "",
			Password: "",
			error: {
				usernameError: "",
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
		error.usernameError =
			this.state.Username === "" ? "Username is required." : "";
		error.passwordError =
			this.state.Password === "" ? "Password is required." : "";
		isError =
			this.state.usernameError !== "" || this.state.passwordError !== ""
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
					<LoginField id="Username">
						<Input
							id="Username"
							pass={this.getData}
							position="right"
							disabled={this.state.error.usernameError === ""}
							maxLength="25"
							display={this.state.error.usernameError}
							type="text"
							style={{top: "-2.8vw", left: "37.6vw"}}
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
