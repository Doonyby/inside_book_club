import React from "react";
import { connect } from "react-redux";

class Chatroom extends React.Component {
	render () {
		return (
			<h1>Chatroom</h1>
		);
	}
}

export default connect()(Chatroom);