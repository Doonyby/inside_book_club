import React from "react";
import { connect } from 'react-redux';
import Signup from './SignupPage';
import { signUpRequest } from '../../actions/landing-actions';

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitSignup: (userData) => { return dispatch(signUpRequest(userData)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)