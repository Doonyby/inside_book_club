require('isomorphic-fetch');
import { browserHistory } from "react-router";


export const SHOW_NEW_CLUB_MODAL = "SHOW_NEW_CLUB_MODAL";
export const showNewClubModal = () => ({
	type: SHOW_NEW_CLUB_MODAL
});

export const HIDE_NEW_CLUB_MODAL = "HIDE_NEW_CLUB_MODAL";
export const hideNewClubModal = () => ({
	type: HIDE_NEW_CLUB_MODAL
});

export const CREATE_NEW_MYCLUB_SUCCESS = "CREATE_NEW_MYCLUB_SUCCESS";
export const createNewMyClubSuccess = (data) => ({
	type: CREATE_NEW_MYCLUB_SUCCESS,
	data
});

export const CREATE_NEW_MYCLUB_ERROR = "CREATE_NEW_MYCLUB_ERROR";
export const createNewMyClubError = (message) => ({
	type: CREATE_NEW_MYCLUB_ERROR,
	message
});

export const createNewMyClub = (newClubData) => {
	return dispatch => {
		const url = '/api/createNewMyClub';
		fetch(url, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newClubData)
		})
		.then(response => response.json())
		.then(data => {
			if (data.message) {
				(console.log('createDataMessage', data.message));
				dispatch(createNewMyClubError(data.message));
			}
			else {
				console.log('createData', data);
				dispatch(createNewMyClubSuccess(data));
				browserHistory.push('/home');
			}			
		})
	}
}

