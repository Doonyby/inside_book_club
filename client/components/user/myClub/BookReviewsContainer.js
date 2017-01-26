import React from "react";
import { connect } from 'react-redux';
import BookReviews from './BookReviews';
import { getBookReviewAction } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	var review = "";
	if (state.myClubReducer.bookReviews) {
		var string = state.myClubReducer.bookReviews.reviews_widget;
		review = string.split('</style>').pop();
	}
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

