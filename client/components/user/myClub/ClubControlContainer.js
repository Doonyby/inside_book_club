import React from "react";
import { connect } from 'react-redux';
import ClubControl from './ClubControl';
import { showEditClubModalAction, hideEditClubModal, submitEditClubAction, deleteClubAction } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		showEditClubModalControl: () => { dispatch(showEditClubModalAction()); },
		hideEditClubModal: () => { dispatch(hideEditClubModal()); },
		submitEditClubControl: (clubData) => { dispatch(submitEditClubAction(clubData)); },
		deleteClubControl: (clubName) => { dispatch(deleteClubAction(clubName)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ClubControl)