import React from "react";
import { connect } from 'react-redux';
import JoinControl from './JoinControl';
import { leaveJoinedClubAction } from "../../../actions/user-actions";

const mapStateToProps = (state) => {
	return {
		club: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		leaveJoinedClub: (clubObj) => { dispatch(leaveJoinedClubAction(clubObj)); }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinControl)