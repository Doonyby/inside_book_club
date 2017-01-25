import React from "react";
import { connect } from 'react-redux';
import JoinedComment from './JoinedComment';
import { enterJoinCommentAction } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	return {
		club: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		enterJoinComment: (commentData) => { dispatch(enterJoinCommentAction(commentData)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinedComment)