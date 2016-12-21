import React from "react";
import { connect } from "react-redux";

class JoinClub extends React.Component {
	render () {
		return (
			<h1>JoinClub</h1>
		);
	}
}

export default connect()(JoinClub);