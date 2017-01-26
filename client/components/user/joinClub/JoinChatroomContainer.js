import React from "react";
import { connect } from "react-redux";
import JoinChatroom from "./JoinChatroom";

const mapStateToProps = (state) => {
	return {
		club: state
	}
}


export default connect(mapStateToProps)(JoinChatroom);