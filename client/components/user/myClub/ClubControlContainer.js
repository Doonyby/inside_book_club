import React from "react";
import { connect } from 'react-redux';
import ClubControl from './ClubControl';
import { showNewClubModal, hideNewClubModal, submitNewMyClub } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showNewClubModal: () => { dispatch(showNewClubModal()); },
		hideNewClubModal: () => { dispatch(hideNewClubModal()); },
		submitNewMyClub: (newClubData) => { dispatch(submitNewMyClub(newClubData)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubControl)