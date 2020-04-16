import React, {Component} from "react";
import logo from "../images/logoweb2.png";
import menu from "../images/menu.png";
import shopping_cart from "../images/shopping-cart.png";
import notification from "../images/notification.png";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	// componentWillUpdate = () => {
	// }
	// componentDidUpdate = () => {
	//     this.props.history.unlisten();
	// }
	// hideDropdown = () => {
	// 	this.setState({
	// 		dropdownState: false
	// 	});
	// 	// this.props.history.push('/to');
	// };
	showDropdown = () => {
        let x = document.getElementById("dropdown");
		if (x.className === "dropdown-block") {
			x.className = "dropdown-none";
		} else {
			x.className = "dropdown-block";
		}
        console.log(x.className);
        console.log('huh')
	};
	render() {
		return (
			<div className="row-flex navbar textM">
				<img
					style={{
						width: "2%",
						margin: "0 1vw 0 0.25vw",
						cursor: "pointer"
					}}
					id="more_menu"
					src={menu}
					alt="menu"
					className="background"
                    onClick={this.showDropdown}
				/>
				<div id="dropdown" className="dropdown">
					{/* <img
                        src={close}
                        className="block"
                        style={{ width: "7%", float: "right", cursor: "pointer", marginRight: "1vw" }}
                        // onClick={this.hideDropdown}
                        // onBlur={this.hideDropdown}
					/> */}
					<Link
						className="link block dropdown-content"
						to="/search"
						style={{marginTop: "-0.5vw"}}
					>
						- ค้นหาเมนู
					</Link>
					<Link className="link block dropdown-content" to="/home">
						- หน้าแรก
					</Link>
					<Link className="link block dropdown-content" to="/menu">
						- เมนู
					</Link>
					<Link
						className="link block dropdown-content"
						to="/about"
						style={{textIndent: "1.9vw"}}
					>
						เมนูแนะนำ
					</Link>

					<Link
						className="link block dropdown-content"
						to="/about"
						style={{textIndent: "1.9vw"}}
					>
						อาหารเหนือ
					</Link>

					<Link
						className="link block dropdown-content"
						to="/about"
						style={{textIndent: "1.9vw"}}
					>
						อาหารอีสาน
					</Link>

					<Link
						className="link block dropdown-content"
						to="/about"
						style={{textIndent: "1.9vw"}}
					>
						อาหารกลาง
					</Link>

					<Link
						className="link block dropdown-content"
						to="/about"
						style={{textIndent: "1.9vw"}}
					>
						อาหารใต้
					</Link>

					<Link className="link block dropdown-content" to="/about">
						- สินค้ายอดฮิต
					</Link>

					<Link className="link block dropdown-content" to="/about">
						- เกี่ยวกับ
					</Link>
				</div>
				<img
					style={{
						width: "8vw",
						height: "7vw",
						margin: "-2.3vw 51vw 0 0"
					}}
					src={logo}
					alt="logo"
				/>
				<img
					style={{
						width: "1.3vw",
						height: "1.4vw",
						margin: "0.3vw 0.7vw 0vw 0",
						cursor: "pointer"
					}}
					onClick={() => {
						this.props.history.push("./notification");
					}}
					src={notification}
					alt="notification"
				/>
				<Link
					className="link"
					to="/notification"
					style={{
						fontSize: "1.4vw",
						margin: "-0.14vw 0 0 0"
					}}
				>
					Notification
				</Link>
				<div
					style={{
						borderLeft: "0.15vw solid #707070",
						margin: "0 2vw 0 2vw"
					}}
				/>
				<Link
					className="link"
					to="/register"
					style={{
						fontSize: "1.4vw",
						margin: "-0.14vw 0 0 0"
					}}
				>
					Register
				</Link>
				<div
					style={{
						borderLeft: "0.15vw solid #707070",
						margin: "0 2vw 0 2vw"
					}}
				/>
				<Link
					to="/login"
					className="link"
					style={{
						fontSize: "1.4vw",
						margin: "-0.14vw 0 0 0"
					}}
				>
					Log in
				</Link>
				<img
					style={{
						width: "2%",
						margin: "0 1vw 0 2.5vw",
						cursor: "pointer"
					}}
					// align="right"
					src={shopping_cart}
					alt="menu"
					className="background"
					onClick={this.dropdown}
				/>
			</div>
		);
	}
}

export default withRouter(Navbar);
