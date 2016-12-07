import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import Welcome from "./components/landing/Welcome";
import Instructions from "./components/landing/Instructions";
import LoginPage from "./components/landing/LoginPage";
import SignupPage from "./components/landing/SignupPage";
import Home from "./components/user/HomePage";
import Navigation from "./components/user/Navigation";
import MyClub from "./components/user/myClub/MyClub";
import JoinClub from "./components/user/joinClub/JoinClub";


render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/instructions" component={Instructions} />
				<Route path="/signup" component={SignupPage} />
				<Route path="/login" component={LoginPage} />
			</Route>
			<Route path="/home" component={Home}>

			</Route>	
		</Router>
	</Provider>, document.getElementById('app'));

