import React from "react";
import { connect } from "react-redux";
import Chatroom from "./Chatroom";

const mapStateToProps = (state) => {
	return {
		club: state
	}
}


export default connect(mapStateToProps)(Chatroom);