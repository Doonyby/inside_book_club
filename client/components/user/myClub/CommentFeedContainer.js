import React from "react";
import { connect } from 'react-redux';
import CommentFeed from './CommentFeed';

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

export default connect(mapStateToProps)(CommentFeed)