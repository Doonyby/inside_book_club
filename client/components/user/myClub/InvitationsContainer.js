import React from "react";
import { connect } from 'react-redux';
import Invitations from './Invitations';

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

export default connect(mapStateToProps)(Invitations)