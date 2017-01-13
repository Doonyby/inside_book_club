require('isomorphic-fetch');
import { browserHistory } from "react-router";
import axios from "axios";


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

export const GET_MYCLUB_DATA_SUCCESS = "GET_MYCLUB_DATA_SUCCESS";
export const getMyClubDataSuccess = (data) => ({
	type: GET_MYCLUB_DATA_SUCCESS,
	data
});

export const GET_MYCLUB_DATA_ERROR = "GET_MYCLUB_DATA_ERROR";
export const getMyClubDataError = (message) => ({
	type: GET_MYCLUB_DATA_ERROR,
	message
});

export const getMyClubData = (clubName) => {
	return dispatch => {
		axios.get('/api/getMyClubData/' + clubName)
		  .then(function (response) {
		    dispatch(getMyClubDataSuccess(response.data));
		  })
		  .catch(function (error) {
		    dispatch(getMyClubDataError(error.message));
		  });
	}
}

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
				console.log('createDataMessage', data.message);
				dispatch(createNewMyClubError(data.message));
			}
			else {
				dispatch(createNewMyClubSuccess(data));
				browserHistory.push('/home');
			}			
		})
	}
}


