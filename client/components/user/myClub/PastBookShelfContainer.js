import React from "react";
import { connect } from 'react-redux';
import PastBookShelf from './PastBookShelf';
import { shelfPastBookAction, removePastBookAction } from "../../../actions/landing-actions";

const mapStateToProps = (state) => {
	return {
		club: state.homeReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		shelfPastBook: (bookTitle) => { dispatch(shelfPastBookAction(bookTitle)) },
		removePastBook: (bookId) => { dispatch(removePastBookAction(bookId)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PastBookShelf)