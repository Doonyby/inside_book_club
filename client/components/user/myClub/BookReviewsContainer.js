import React from "react";
import { connect } from 'react-redux';
import BookReviews from './BookReviews';

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

export default connect(mapStateToProps)(BookReviews)

