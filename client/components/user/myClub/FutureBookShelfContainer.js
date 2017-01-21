import React from "react";
import { connect } from 'react-redux';
import FutureBookShelf from './FutureBookShelf';
import { shelfFutureBookAction, removeFutureBookAction } from "../../../actions/landing-actions";

const mapStateToProps = (state) => {
	return {
		club: state.homeReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		shelfFutureBook: (bookTitle) => { dispatch(shelfFutureBookAction(bookTitle)) },
		removeFutureBook: (bookId) => { dispatch(removeFutureBookAction(bookId)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FutureBookShelf)