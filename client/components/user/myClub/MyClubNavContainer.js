import React from "react";
import { connect } from 'react-redux';
import MyClubNav from './MyClubNav';
import { myClubNavAction } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		myClubNav: (component) => { dispatch(myClubNavAction(component)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyClubNav);