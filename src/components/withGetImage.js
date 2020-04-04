import React, {Component} from "react";

const withGetImage = () => {
	return class WrappedComponent extends Component {
		getImage = () => {
			/*วางฟังก์ชันตรงนี้*/
		};
		getIcon = () => {
			/*วางฟังก์ชันตรงนี้*/
		};
		render() {
			return (
				<WrappedComponent
					{...this.props}
					getImage={this.getImage}
					getIcon={this.getIcon}
				/>
			);
		}
	};
};
export default withGetImage;
