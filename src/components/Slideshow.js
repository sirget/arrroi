import React, {Component} from "react";

class Slideshow extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="slide column-flex">
				<img src={this.props.images[0]} />
				<div className="slide-container row-flex">
					<img src={this.props.images[0]} style={{width: "25%"}} />
					<img src={this.props.images[0]} style={{width: "25%"}} />
					<img src={this.props.images[0]} style={{width: "25%"}} />
					<img src={this.props.images[0]} style={{width: "25%"}} />
				</div>
			</div>
		);
	}
}

export default Slideshow;
