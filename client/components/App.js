import React from "react";
import { connect } from "react-redux";


import Welcome from "./landing/Welcome";

class App extends React.Component {
	render() {
		return (
			<div className="appDiv">
				<Welcome className="welcome" key="welcomeKey" />
				{this.props.children}
			</div>
		);
	} 
}


const mapStateToProps = (state) => ({ club: state });

export default connect(mapStateToProps)(App);


