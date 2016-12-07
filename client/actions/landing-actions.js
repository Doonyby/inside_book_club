require('es6-promise').polyfill();
require('isomorphic-fetch');

//change state to caps
export const ADD_CAPS = 'ADD_CAPS';
export const addCaps = () => ({
	type: ADD_CAPS
});

export const ADD_LOWER = 'ADD_LOWER';
export const addLower = () => ({
	type: ADD_LOWER
});

export const signUpRequest = (userData) => {
	console.log("action userdata", userData);
	return dispatch => {
		const url = '/api/signup';
			fetch(url, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(userData)
			})
		    .then(function(data){
		    	console.log('action data', data);
		    })
		    .catch(function(error){
		    	console.log('action error', error);
		    });
	}
}

export const loginRequest = (userData) => {
	return dispatch => {
		const url = '/api/login';
			fetch(url, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify(userData)
			})
		    .then(function(data){
		    	console.log('action data', data);
		    })
		    .catch(function(error){
		    	console.log('action error', error);
		    });
	}
}


