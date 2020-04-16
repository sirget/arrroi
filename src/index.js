import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

document.addEventListener("mouseup", (event) => {
    let x = document.getElementById("dropdown");
    let y = document.getElementById("more_menu");
    // console.log(x.className)
	if (event.target !== x && event.target !== y) {
		if (x.className === "dropdown-block") {
			x.className = "dropdown-none";
		} 
	}
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
