import React from "react";
import { connect } from 'react-redux';
import SignupPage from './SignupPage.js';
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)