import React, {Component} from "react";
import firebase from "../database/firebase";
import {Link} from "react-router-dom";
import กะเพราหมู from "../images/กะเพราหมู.jpg";
import กุ้งคั่วกระเทียมพริก from "../images/กุ้งคั่วกระเทียมพริก.jpg";
import ข้าวผัดกุ้ง from "../images/ข้าวผัดกุ้ง.png";
import MenuList from "./MenuList";
import RegionalMenu from "./RegionalMenu";
import Slideshow from "./Slideshow";

// const images = [{ ข้าวผัดกุ้ง }, {ข้าวผัดกุ้ง}]
class MenuPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuList: "",
		};
	}

	componentDidMount = async () => {
		await this.importdata();
	};

	importdata = async () => {
		let db = firebase.firestore();
		await db
			.collection("menu")
			.get()
			.then((snapshot) => {
				const data = snapshot.docs.map((doc) => doc.data().name);
				this.setState({
					menuList: data,
				});
			})
			.catch(function (error) {
				console.log("Error", error);
			});
	};

	// render() {
	// 	if (this.state.menuList !== "") {
	// 		return (
	// 			<div>
	// 				{this.state.menu[0]}
	// 				<br></br>
	// 			</div>
	// 		);
	// 	} else {
	// 		return null;
	// 	}
	// }

	render() {
		if (this.state.menuList !== "")
			return (
				<div className="column-flex menu-page">
					<Slideshow images={[ข้าวผัดกุ้ง]} />
					<div className="row-flex region-container">
						<RegionalMenu
							src={ข้าวผัดกุ้ง}
							alt="ข้าวผัดกุ้ง"
							title="อาหารเหนือ"
						/>
						<RegionalMenu
							src={ข้าวผัดกุ้ง}
							alt="ข้าวผัดกุ้ง"
							title="อาหารอีสาน"
						/>
						<RegionalMenu
							src={ข้าวผัดกุ้ง}
							alt="ข้าวผัดกุ้ง"
							title="อาหารกลาง"
						/>
						<RegionalMenu
							src={ข้าวผัดกุ้ง}
							alt="ข้าวผัดกุ้ง"
							title="อาหารใต้"
						/>
					</div>
					<div className="column-flex">
						{this.state.menuList.map((menu) => {
                            return <MenuList src={ข้าวผัดกุ้ง} alt={menu} menu={'/'+menu}/>;
						})}
						<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดกุ้ง" />
						<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดหมู" />
						<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดปลา" />
						<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดปู" />
						<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดหมู" />
					</div>
				</div>
			);
		else return null;
	}
}

export default MenuPage;
