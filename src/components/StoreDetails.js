import React, {Component} from "react";
import BuyProduct from "./BuyProduct";
import เนื้อสันในวัว from "../images/เนื้อสันในวัว.jpg";

class StoreDetails extends Component {
	render() {
		return (
			<>
				<BuyProduct
					nameOfProduct="เนื้อสันในวัว 150 กรัม"
					color="brown"
					price="99"
					unitOfProduct="ถุง"
					imgFood={เนื้อสันในวัว}
				/>
				<BuyProduct
					nameOfProduct="เนื้อสันในวัว 150 กรัม"
					color="cream"
					price="99"
					unitOfProduct="ถุง"
					imgFood={เนื้อสันในวัว}
				/>
			</>
		);
	}
}
export default StoreDetails;
