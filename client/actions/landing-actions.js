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
		    		console.log('error', data.message);
		    		//dispatch(signUpRequestError(data.message));
		    	}
		    	else {
		    		console.log('data', data);
		    		//dispatch(sighUpRequestSuccess(data));
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
		    	console.log('data', data);
		    	// dispatch(loginRequestSuccess(data));
		    })
		    .catch(error => {
		    	console.log('error', error);
		    	// dispatch(loginRequestError(error));
		    });
	}
}


