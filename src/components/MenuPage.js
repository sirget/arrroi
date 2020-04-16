import React, {Component} from "react";
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

		this.state = {};
	}

	render() {
		return (
            <div className = "column-flex menu-page">
                <Slideshow images={[ข้าวผัดกุ้ง]}/>
                <div className="row-flex region-container">
                    <RegionalMenu src={ข้าวผัดกุ้ง} alt="ข้าวผัดกุ้ง" title="อาหารเหนือ"/>
                    <RegionalMenu src={ข้าวผัดกุ้ง} alt="ข้าวผัดกุ้ง" title="อาหารอีสาน"/>
                    <RegionalMenu src={ข้าวผัดกุ้ง} alt="ข้าวผัดกุ้ง" title="อาหารกลาง"/>
                    <RegionalMenu src={ข้าวผัดกุ้ง} alt="ข้าวผัดกุ้ง" title="อาหารใต้"/>
                </div>
				<div className="column-flex">
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดกุ้ง" />
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดหมู" />
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดปลา" />
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดปู" />
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดหมู" />
				</div>
			</div>
		);
	}
}

export default MenuPage;













