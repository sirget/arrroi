import React, {Component} from "react";
import background from "../images/BG.png";
import {withRouter} from "react-router-dom";
class Welcome extends Component {
	render() {
		return (
			<div className="column-flex">
				<div className="container">
					<img
						src={background}
						alt="background"
						className="background"
						style={{position: "relative", zIndex: "-2"}}
					/>
					<div className="vertical-center">
						<h1 className="title">
							Let's go
							<br />
							shopping!
						</h1>
						<div style={{padding: "15px 0 0 0"}}>
							<button
								className="start"
								onClick={() => this.props.history.push("/home")}
							>
								Start Now
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Welcome);
