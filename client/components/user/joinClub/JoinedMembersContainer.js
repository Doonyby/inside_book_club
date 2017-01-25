import React from "react";
import { connect } from 'react-redux';
import JoinedMembers from './JoinedMembers';

const mapStateToProps = (state) => {
	return {
		club: state.joinClubReducer
	}
}

export default connect(mapStateToProps)(JoinedMembers)