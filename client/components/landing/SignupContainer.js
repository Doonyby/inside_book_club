import React from "react";
import { connect } from 'react-redux';
import SignupPage from './SignupPage.js';
import { signUpRequest, hideSignupModalAction } from '../../actions/landing-actions';

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		submitSignup: (userData) => { dispatch(signUpRequest(userData)) },
		hideSignupModal: () => { dispatch(hideSignupModalAction()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)