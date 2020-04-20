import React, {Component} from "react";
import pan from "../images/pan.png";
import mix from "../images/mix.png";
import people from "../images/networking.png";
import firebase from "../database/firebase";
class MenuDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.match.params.name, //ชื่อเมนูอาหาร เช่น กุ้งคั่วกระเทียมพริก จาก url
			//name: "กุ้งคั่วกระเทียมพริก",
			multiplier: "", //สำหรับใส่จำนวนที่
			ingredientsList: "", //สำหรับใส่ list ส่วนผสม
			stepsList: "", //สำหรับใส่ list วิธีการทำอาหาร
		};
	}

	//ใส่ didMount ตรงนี้ก็ได้ ถ้ามี loading ก็เขียนเพิ่มใน state ได้เลย เดี๋ยวเรามาเรียง ingredients กับ steps ต่อให้
	componentDidMount = async () => {
		await this.importdata();
		//console.log(this.state.multiplier);
		//console.log(this.state.ingredientsList);
		//console.log(this.state.stepsList);
	};

	importdata = async () => {
		let db = firebase.firestore();
		await db
			.collection("menu")
			.where("name", "==", this.state.name)
			.limit(1)
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach((documentsnapshot) => {
					//console.log(documentsnapshot.data());
					this.setState({
						multiplier: documentsnapshot.data().multiplier,
						ingredientsList: documentsnapshot.data().productList,
						stepsList: documentsnapshot.data().howto,
					});
				});
			});
	};

	render() {
		return (
			<div className="textS" style={{fontSize: "1.5vw"}}>
				<h1 className="menu-title">{this.state.name}</h1>
				{/* //////////////////////////////////////////ส่วนจำนวนที่/////////////////////////////////////// */}
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
				{/* //////////////////////////////////////////กองทัพส่วนผสมต่าง ๆ////////////////////////////////////// */}
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
				{/* //////////////////////////////////////////วิธีทำตั่งต่าง ๆ////////////////////////////////////// */}
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
