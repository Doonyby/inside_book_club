require('isomorphic-fetch');

export const SHOW_NEW_CLUB_MODAL = "SHOW_NEW_CLUB_MODAL";
export const showNewClubModal = () => ({
	type: SHOW_NEW_CLUB_MODAL
});

export const HIDE_NEW_CLUB_MODAL = "HIDE_NEW_CLUB_MODAL";
export const hideNewClubModal = () => ({
	type: HIDE_NEW_CLUB_MODAL
});

export const submitNewMyClub = (newClubData) => {
	console.log('newClubData', newClubData);
	return dispatch => {
		const url = '/api/submitNewMyClub';
		fetch(url, {
			method: 'PUT',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newClubData)
		})
		.then(response => response.json())
		.then(data => {
			if (data.message) {
				(console.log('dataMessage', data.message));
			}
			else {
				console.log('data', data);
			}
		})
	}
}

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