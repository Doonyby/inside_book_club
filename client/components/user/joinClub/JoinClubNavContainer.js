import React from "react";
import { connect } from 'react-redux';
import JoinClubNav from './JoinClubNav';
import { joinClubNavAction } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	return {
		club: state.joinClubReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		joinClubNav: (component) => { dispatch(joinClubNavAction(component)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinClubNav);