require('isomorphic-fetch');
import { browserHistory } from "react-router";
import axios from "axios";
import { deleteMyClubSuccess } from "./landing-actions";


export const SHOW_EDIT_CLUB_MODAL = "SHOW_EDIT_CLUB_MODAL";
export const showEditClubModalAction = () => ({
	type: SHOW_EDIT_CLUB_MODAL
});

export const HIDE_EDIT_CLUB_MODAL = "HIDE_EDIT_CLUB_MODAL";
export const hideEditClubModal = () => ({
	type: HIDE_EDIT_CLUB_MODAL
});

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

export const DELETE_CLUB_SUCCESS = "DELETE_CLUB_SUCCESS";
export const deleteClubSuccess = (data) => ({
	type: DELETE_CLUB_SUCCESS,
	data
});

export const deleteClubAction = (clubName) => {
	return dispatch => {
		function deleteClub() {
		  return axios.delete('/api/deleteClub/' + clubName.clubName);
		}
		function deleteMyClub() {
		  return axios.put('/api/removeMyClub', clubName)
		}
		axios.all([deleteClub(), deleteMyClub()])
			.then(axios.spread(function (acct, perms) {
				console.log('perms', perms.data);
				dispatch(deleteMyClubSuccess(perms.data));
				dispatch(deleteClubSuccess(perms.data));
			}));	 
	}
}

export const submitEditClubAction = (clubData) => {
	return dispatch => {
		axios.put('/api/submitEditClub', clubData)
			.then(function (response) {
				dispatch(getMyClubDataSuccess(response.data));
			})
			.catch(function (error) {
				dispatch(getMyClubDataError(error.message));
			});
	}
}

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


