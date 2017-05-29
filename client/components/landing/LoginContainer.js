import React from "react";
import { connect } from 'react-redux';
import Login from './LoginPage';
import { loginRequest, hideLoginModalAction } from '../../actions/landing-actions';

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (userData) => { dispatch(loginRequest(userData)) },
		hideLoginModal: () => { dispatch(hideLoginModalAction()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
