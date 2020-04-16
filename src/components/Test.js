import React, {Component} from "react";
import Test2 from "./Test2";
import BuyProduct from "./StoreDetails";
import MenuDetails from './MenuDetails';

class Test extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            // data
            pass: 45
        }
    }
    
	render() {
		return (
			<>
                {/* <MenuDetails /> */}
                {/* <h1>{this.state}</h1> */}
                <BuyProduct />
			</>
		);
	}
}

export default Test;
