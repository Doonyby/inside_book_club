import React from "react";
import { connect } from 'react-redux';
import CommentFeed from './CommentFeed';
import { enterCommentAction } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	return {
		club: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		enterComment: (commentData) => { dispatch(enterCommentAction(commentData)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentFeed)