import React from "react";
import { connect } from 'react-redux';
import Meeting from './Meeting';

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

export default connect(mapStateToProps)(Meeting)