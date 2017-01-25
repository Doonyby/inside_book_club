require('isomorphic-fetch');
import { browserHistory } from "react-router";
import axios from "axios";
import { deleteMyClubSuccess, deleteJoinedClub } from "./landing-actions";


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

export const GET_JOINCLUB_DATA_SUCCESS = "GET_JOINCLUB_DATA_SUCCESS";
export const getJoinClubDataSuccess = (data) => ({
	type: GET_JOINCLUB_DATA_SUCCESS,
	data
});

export const GET_JOINCLUB_DATA_ERROR = "GET_JOINCLUB_DATA_ERROR";
export const getJoinClubDataError = (message) => ({
	type: GET_JOINCLUB_DATA_ERROR,
	message
});

export const DELETE_CLUB_SUCCESS = "DELETE_CLUB_SUCCESS";
export const deleteClubSuccess = (data) => ({
	type: DELETE_CLUB_SUCCESS,
	data
});

export const ENTER_COMMENT_SUCCESS = "ENTER_COMMENT_SUCCESS";
export const enterCommentSuccess = (commentFeed) => ({
	type: ENTER_COMMENT_SUCCESS,
	commentFeed
});

export const ENTER_COMMENT_ERROR = "ENTER_COMMENT_ERROR";
export const enterCommentError = (message) => ({
	type: ENTER_COMMENT_ERROR,
	message
});

export const ENTER_JOIN_COMMENT_SUCCESS = "ENTER_JOIN_COMMENT_SUCCESS";
export const enterJoinCommentSuccess = (commentFeed) => ({
	type: ENTER_JOIN_COMMENT_SUCCESS,
	commentFeed
});

export const ENTER_JOIN_COMMENT_ERROR = "ENTER_JOIN_COMMENT_ERROR";
export const enterJoinCommentError = (message) => ({
	type: ENTER_JOIN_COMMENT_ERROR,
	message
});

export const GET_BOOK_REVIEW_SUCCESS = "GET_BOOK_REVIEW_SUCCESS";
export const getBookReviewSuccess = (data) => ({
	type: GET_BOOK_REVIEW_SUCCESS,
	data
});

export const GENERATE_CLUB_LIST_SUCCESS = "GENERATE_CLUB_LIST_SUCCESS";
export const generateClubListSuccess = (data) => ({
	type: GENERATE_CLUB_LIST_SUCCESS,
	data
});

export const LEAVE_JOINED_CLUB_SUCCESS = "LEAVE_JOINED_CLUB_SUCCESS";
export const leaveJoinedClubSuccess = (data) => ({
	type: LEAVE_JOINED_CLUB_SUCCESS,
	data
});

export const LEAVE_JOINED_CLUB_ERROR = "LEAVE_JOINED_CLUB_ERROR";
export const leaveJoinedClubError = (message) => ({
	type: LEAVE_JOINED_CLUB_ERROR,
	message
});

export const leaveJoinedClubAction = (clubObj) => {
	return dispatch => {
		axios.put('/api/leaveJoinedClub', clubObj)
			.then(function (response) {
				dispatch(leaveJoinedClubSuccess(response.data));
				dispatch(deleteJoinedClub(clubObj));
			})
			.catch(function (error) {
				dispatch(leaveJoinedClubError(error.response.data.message));
			});	
	}
}
 
export const updateClubMembers = (clubObj) => {
	return dispatch => {
		axios.put('/api/updateClubMembers', clubObj)
			.then(function (response) {
				dispatch(getJoinClubDataSuccess(response.data));
			})
			.catch(function (error) {
				dispatch(getJoinClubDataError(error.response.data.message));
			});
	}
}

export const getJoinClubDataAction = (clubName) => {
	return dispatch => {
		axios.get('/api/getJoinClubData/' + clubName)
			.then(function (response) {
				dispatch(getJoinClubDataSuccess(response.data));
			})
			.catch(function (error) {
				dispatch(getJoinClubDataError(error.response.data.message));
			});			
	}
}

export const generateClubListAction = () => {
	return dispatch => {
		axios.get('/api/getClubList')
			.then(function (response) {
				dispatch(generateClubListSuccess(response.data));
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}
}

export const getBookReviewAction = (bookTitle) => {
	return dispatch => {
		axios.get('/api/getBookReview/' + bookTitle)
			.then(function (response) {
				console.log(response.data);
				dispatch(getBookReviewSuccess(response.data));
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}
}

export const enterCommentAction = (comment) => {
	return dispatch => {
		axios.put('/api/enterComment', comment)
			.then(function (response) {
				dispatch(enterCommentSuccess(response.data.commentFeed));
			})
			.catch(function (error) {
				dispatch(enterCommentError(error.message));
			});			
	}
}

export const enterJoinCommentAction = (comment) => {
	return dispatch => {
		axios.put('/api/enterComment', comment)
			.then(function (response) {
				dispatch(enterJoinCommentSuccess(response.data.commentFeed));
			})
			.catch(function (error) {
				dispatch(enterJoinCommentError(error.message));
			});			
	}
}

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

export const getJoinClubData = (clubName) => {
	return dispatch => {
		axios.get('/api/getMyClubData/' + clubName)
		  .then(function (response) {
		    dispatch(getJoinClubDataSuccess(response.data));
		  })
		  .catch(function (error) {
		    dispatch(getJoinClubDataError(error.message));
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


