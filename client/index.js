import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/landing/App";
import Welcome from "./components/landing/Welcome";
import Instructions from "./components/landing/Instructions";
import LoginContainer from "./components/landing/LoginContainer";
import SignupContainer from "./components/landing/SignupContainer";
import Home from "./components/user/HomePage";
import Navigation from "./components/user/Navigation";
import MyClubEntrance from "./components/user/myClub/MyClubEntrance";
import JoinClubEntrance from "./components/user/joinClub/JoinClubEntrance";
import JoinChatroomContainer from "./components/user/joinCLub/JoinChatroomContainer";
import MyClubChatroomContainer from "./components/user/myClub/ChatroomContainer";


render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/instructions" component={Instructions} />
				<Route path="/signup" component={SignupContainer} />
				<Route path="/login" component={LoginContainer} />
			</Route>
			<Route path="/home" component={Home}>
				<IndexRoute component={MyClubEntrance} />
				<Route path="/home/joinclub" component={JoinClubEntrance} />
				<Route path="/home/myClubChatroom" component={MyClubChatroomContainer} /> 
				<Route path="/home/joinChatroom" component={JoinChatroomContainer} />
			</Route>	
		</Router>
	</Provider>, document.getElementById('app'));

