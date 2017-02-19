import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import Welcome from "./components/landing/Welcome";
import Information from "./components/landing/Information";
import LoginContainer from "./components/landing/LoginContainer";
import SignupContainer from "./components/landing/SignupContainer.js";
import Home from "./components/user/HomePage";
import Navigation from "./components/user/Navigation";
import MyClubEntrance from "./components/user/myClub/MyClubEntrance";
import JoinClubEntrance from "./components/user/joinClub/JoinClubEntrance";
import JoinChatroomContainer from "./components/user/joinClub/JoinChatroomContainer";
import MyClubChatroomContainer from "./components/user/myClub/ChatroomContainer";
import Instructions from "./components/user/Instructions";
import Landing from "./components/landing/Landing";
import { persistStore } from 'redux-persist';
import Loading from "./components/landing/Loading";
import Page404 from "./components/landing/Page404";

class App extends React.Component {
	constructor() {
		super()
		this.state= {
			appIsReady: false
		}
	}
  	componentWillMount() {
	    persistStore(store, {
	      debounce: 500
	    }, () => this.setState({
	      appIsReady: true
    	}));
	}
	render() {
	    if (!this.state.appIsReady) {
	      return <Loading />;
	    }		
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
						<Route path="/" component={Landing}>
							<Route path="/information" component={Information} />
							<Route path="/signup" component={SignupContainer} />
							<Route path="/login" component={LoginContainer} />
						</Route>
						<Route path="/home" component={Home}>
							<IndexRoute component={MyClubEntrance} />
							<Route path="/joinclub" component={JoinClubEntrance} />
							<Route path="/myClubChatroom" component={MyClubChatroomContainer} /> 
							<Route path="/joinChatroom" component={JoinChatroomContainer} />
							<Route path="/instruction" component={Instructions} />
						</Route>
						<Route path="*" component={Page404}/>	
				</Router>
			</Provider>
		);
	}
}

render(<App />, document.getElementById('app'));



