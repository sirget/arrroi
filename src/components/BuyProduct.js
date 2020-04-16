import React, {Component} from "react";
import cartW from "../images/cartW.png";
import Input from "./Input";

class BuyProduct extends Component {
	constructor() {
		super();
		this.state = {
			quantity: 1,
		};
	}
	getData = (e, data) => {
		this.setState({
			quantity: data,
		});
	};
	render() {
		return (
			<div
				className="storeBox textS"
				style={
					this.props.color === "brown"
						? {backgroundColor: "#814A2C", color: "white"}
						: {backgroundColor: "#EBC27C", color: "black"}
				}
			>
				<img
					className="imgFood"
					src={this.props.imgFood}
					alt={this.props.nameOfProduct}
				/>

				<div className="productDetail">
					<u className="nameOfProduct">{this.props.nameOfProduct}</u>
					<p>
						จำนวนที่ใช้ &nbsp;&nbsp;&nbsp; {this.props.price}
						&nbsp;&nbsp;&nbsp; บาท
					</p>
					<p>
						ราคา &nbsp;&nbsp;&nbsp; {this.props.price}
						&nbsp;&nbsp;&nbsp; บาท
					</p>
					<form name="formAddDecrease" autoComplete="off">
						<label>จำนวน</label> &nbsp;
						<Input
							pass={this.getData}
							id="button"
							default={1}
							maxLength="3"
						/>
					</form>
					<button
						className="addToCartButton textS"
						align="center"
						style={
							this.props.color === "brown"
								? {backgroundColor: "#4A362B"}
								: {backgroundColor: "#814A2C"}
						}
					>
						<img
							className="cartImg"
							src={cartW}
							alt="shopping_cart"
						/>
						<span style={{position: "relative", top: "-0.9vw"}}>
							เพิ่มในรถเข็น
						</span>
					</button>
				</div>
			</div>
		);
	}
}
export default BuyProduct;
