import React from "react";
import { connect } from 'react-redux';
import BookReviews from './BookReviews';
import { getBookReviewAction } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	console.log('state', state);
	var string = state.myClubReducer.bookReviews.reviews_widget;
	var review = string.split('</style>').pop();
	return {
		reviews: review
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getBookReview: (bookTitle) => { dispatch(getBookReviewAction(bookTitle)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookReviews)

