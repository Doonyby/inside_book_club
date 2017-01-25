import React from "react";
import { connect } from 'react-redux';
import JoinMeeting from './JoinMeeting';


const mapStateToProps = (state) => {
	return {
		club: state.joinClubReducer
	}
}

export default connect(mapStateToProps)(JoinMeeting)