import React from "react";
import { connect } from 'react-redux';
import Requests from './Requests';

const mapStateToProps = (state) => {
	return {
		club: state.myClubReducer
	}
}

export default connect(mapStateToProps)(Requests)