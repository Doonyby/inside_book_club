import React from "react";
import { connect } from 'react-redux';
import ClubControl from './ClubControl';

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

export default connect(mapStateToProps)(ClubControl)