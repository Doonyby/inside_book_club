import React from "react";
import { connect } from "react-redux";

class MyClub extends React.Component {
	render () {
		return (
			<h1>MyClub</h1>
		);
	}
}

export default connect()(MyClub);