import React, { Component } from "react";
import book from "../images/book.png";
import shop from "../images/shop.png";

class Home extends Component {
	render() {
		return (
			<div className="textS">
				<h1 className="head_home" align="center">
					คุณกำลังมองหาเครื่องปรุงอยู่ใช่ไหม?
				</h1>
				<div className="box" align="center">
					<div className="box_menu">
						<img className="img_menu" src={book} alt="book"></img>
						<p className="text_menu">
							ค้นหาสินค้า<br></br>
							จากเมนู
						</p>
					</div>
					<div className="box_shop">
						<img className="img_shop" src={shop} alt="shop"></img>
						<p className="text_shop">
							ค้นหาสินค้า<br></br>
							จากร้านค้า
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
