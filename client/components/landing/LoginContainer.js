import React from "react";
import { connect } from 'react-redux';
import Login from './LoginPage';
import { loginRequest } from '../../actions/landing-actions';

const mapStateToProps = (state) => {
	console.log('state', state);
  return {
    user: state.homeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: (userData) => {
			return dispatch(loginRequest(userData))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
