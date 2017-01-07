import React from "react";
import { connect } from 'react-redux';
import Members from './Members';

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

export default connect(mapStateToProps)(Members)