import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import "react-tippy/dist/tippy.css";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import About from "./components/About";
// import LoginTest from "./components/LoginTest";

function App() {
	return (
		<Router>
			<>
				<Switch>
					<Route path="/" exact component={Welcome} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/home" component={Home} />
					<Route path="/test" component={Navbar} />
					<Route path="/about" component={About} />
				</Switch>
			</>
		</Router>
	);
}

export default App;
