import React from "react";
import { connect } from 'react-redux';
import PastBookShelf from './PastBookShelf';

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

export default connect(mapStateToProps)(PastBookShelf)