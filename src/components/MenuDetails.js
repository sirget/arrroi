import React, {Component} from "react";
import pan from "../images/pan.png";
import mix from "../images/mix.png";
import people from "../images/networking.png";
class MenuDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="textS" style={{fontSize: "1.5vw"}}>
				<h1 className="menu-title">เนื้อผัดน้ำมันหอย</h1>
				<div style={{margin: "0 0 1vw 16vw"}}>
					<img src={people} alt="people" className="menu_icon" />
					<span style={{position: "relative", top: "-1vw"}}>
						สำหรับ&nbsp;6&nbsp;ที่
					</span>
				</div>
				<div style={{margin: "0 0 1vw 16vw"}}>
					<img src={pan} alt="ingredients" className="menu_icon" />
					<span style={{position: "relative", top: "-1vw"}}>
						ส่วนผสม
					</span>
				</div>
				<div className="menu-ingredients column-flex">
					<div className="row-flex" style={{marginTop: "1vw"}}>
						<div style={{width: "140%", marginLeft: "3vw"}}>
							เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ
						</div>
						<div style={{width: "60%"}}>300 กรัม</div>
					</div>
					<div className="row-flex" style={{marginTop: "1vw"}}>
						<div style={{width: "140%", marginLeft: "3vw"}}>
							เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ
						</div>
						<div style={{width: "60%"}}>5 ต้น (200 กรัม)</div>
					</div>
					<div className="row-flex" style={{marginTop: "1vw"}}>
						<div style={{width: "140%", marginLeft: "3vw"}}>
							เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ
						</div>
						<div style={{width: "60%"}}>300 กรัม</div>
					</div>
					<div className="row-flex" style={{marginTop: "1vw"}}>
						<div style={{width: "140%", marginLeft: "3vw"}}>
							เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ
						</div>
						<div style={{width: "60%"}}>300 กรัม</div>
					</div>
					<div className="row-flex" style={{marginTop: "1vw"}}>
						<div style={{width: "140%", marginLeft: "3vw"}}>
							เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ
						</div>
						<div style={{width: "60%"}}>300 กรัม</div>
					</div>
					<div className="row-flex" style={{marginTop: "1vw"}}>
						<div style={{width: "140%", marginLeft: "3vw"}}>
							ซอสปรุงอาหารตราแม็กกี้ สูตรผัดกลมกล่อม
						</div>
						<div style={{width: "60%"}}>300 กรัม</div>
					</div>
				</div>
				<div style={{margin: "2vw 0 2vw 16vw"}}>
					<img src={mix} alt="steps" className="menu_icon" />
					<span style={{position: "relative", top: "-0.75vw"}}>
						วิธีทำ
					</span>
				</div>
				<div className="steps">
					<div className="step-title">Step1</div>
					หมักเนื้อวัว โดยปรุงรสด้วยซอสหอยนางรม ซอสปรุงอาหาร ซีอิ๊วดำ
					พริกไทยป่นและน้ำตาลทราย คลุกเคล้าให้เข้ากัน
					พักไว้ในตู้เย็นประมาณ 30 นาที
				</div>
				<div className="steps">
					<div className="step-title">Step2</div>
					หมักเนื้อวัว โดยปรุงรสด้วยซอสหอยนางรม ซอสปรุงอาหาร ซีอิ๊วดำ
					พริกไทยป่นและน้ำตาลทราย คลุกเคล้าให้เข้ากัน
					พักไว้ในตู้เย็นประมาณ 30 นาที
				</div>
			</div>
		);
	}
}

export default MenuDetails;
