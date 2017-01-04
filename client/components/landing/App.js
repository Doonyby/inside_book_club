import React from "react";
import { connect } from "react-redux";


import Welcome from "./Welcome";

class App extends React.Component {
	render() {
		return (
			<div className="appDiv container">
				<Welcome className="welcome" key="welcomeKey" />
				{this.props.children}
			</div>
		);
	} 
}

export default App;



