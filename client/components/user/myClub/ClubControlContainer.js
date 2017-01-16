import React from "react";
import { connect } from 'react-redux';
import ClubControl from './ClubControl';
import { showEditClubModal, hideEditClubModal, submitEditClub } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showEditClubModal: () => { dispatch(showEditClubModal()); },
		hideEditClubModal: () => { dispatch(hideEditClubModal()); },
		submitEditClub: (editClubData) => { dispatch(submitEditClub(editClubData)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubControl)