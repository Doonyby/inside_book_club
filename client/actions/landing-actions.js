require('isomorphic-fetch');
import { browserHistory } from "react-router";

//add user to state upon successful sign in with login or signup
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const signInSuccess = (userData) => ({
	type: SIGN_IN_SUCCESS,
	userData
});

export const SIGN_UP_REQUEST_ERROR = 'SIGN_UP_REQUEST_ERROR';
export const signUpRequestError = (message) => ({
	type: SIGN_UP_REQUEST_ERROR,
	message
});

export const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR';
export const loginRequestError = (message) => ({
	type: LOGIN_REQUEST_ERROR,
	message
})

export const signUpRequest = (userData) => {
	return dispatch => {
		const url = '/api/signup';
		fetch(url, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(userData)
		})
	    .then(response => response.json())
	    .then(data => {
	    	if (data.message) {
	    		dispatch(signUpRequestError(data.message));
	    	}
	    	else {
	    		dispatch(signInSuccess(data));
	    		browserHistory.push('/home');
	    	}	
	    });
	}
}

export const loginRequest = (userData) => {
	return dispatch => {
			fetch('/api/login', {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(userData)
			})
		    .then(response => {
		    	if (!response.ok) {
		    		const error = new Error(response.statusText);
		    		error.response = response;
		    		throw error;
		    	}
		    	return response;
		    })
		    .then(response => response.json())
		    .then(data => {
		    	dispatch(signInSuccess(data));
		    	browserHistory.push('/home');
		    })
		    .catch(error => {
		    	dispatch(loginRequestError(error));
		    });
	}
}


