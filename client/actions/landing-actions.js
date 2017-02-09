require('isomorphic-fetch');
import axios from "axios";
import { browserHistory } from "react-router";
import { createNewMyClub, updateClubMembers } from "./user-actions";

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
export const loginRequestError = () => ({
	type: LOGIN_REQUEST_ERROR,
});

export const SUBMIT_NEW_MYCLUB_SUCCESS = "SUBMIT_NEW_MYCLUB_SUCCESS";
export const submitNewMyClubSuccess = (data) => ({
	type: SUBMIT_NEW_MYCLUB_SUCCESS,
	myClubName: data.myClub
});

export const SUBMIT_NEW_MYCLUB_ERROR = "SUBMIT_NEW_MYCLUB_ERROR";
export const submitNewMyClubError = (message) => ({
	type: SUBMIT_NEW_MYCLUB_ERROR,
	message
});

export const DELETE_MYCLUB_SUCCESS = "DELETE_MYCLUB_SUCCESS";
export const deleteMyClubSuccess = (data) => ({
	type: DELETE_MYCLUB_SUCCESS,
	data
});

export const SHELF_FUTURE_BOOK_SUCCESS = "SHELF_FUTURE_BOOK_SUCCESS";
export const shelfFutureBookSuccess = (bookData) => ({
	type: SHELF_FUTURE_BOOK_SUCCESS,
	bookData
});

export const SHELF_FUTURE_BOOK_ERROR = "SHELF_FUTURE_BOOK_ERROR";
export const shelfFutureBookError = (message) => ({
	type: SHELF_FUTURE_BOOK_ERROR,
	message
});

export const REMOVE_FUTURE_BOOK_SUCCESS = "REMOVE_FUTURE_BOOK_SUCCESS";
export const removeFutureBookSuccess = (bookData) => ({
	type: REMOVE_FUTURE_BOOK_SUCCESS,
	bookData
});

export const REMOVE_FUTURE_BOOK_ERROR = "REMOVE_FUTURE_BOOK_ERROR";
export const removeFutureBookError = (message) => ({
	type: REMOVE_FUTURE_BOOK_ERROR,
	message
});

export const SHELF_PAST_BOOK_SUCCESS = "SHELF_PAST_BOOK_SUCCESS";
export const shelfPastBookSuccess = (bookData) => ({
	type: SHELF_PAST_BOOK_SUCCESS,
	bookData
});

export const SHELF_PAST_BOOK_ERROR = "SHELF_PAST_BOOK_ERROR";
export const shelfPastBookError = (message) => ({
	type: SHELF_PAST_BOOK_ERROR,
	message
});

export const REMOVE_PAST_BOOK_SUCCESS = "REMOVE_PAST_BOOK_SUCCESS";
export const removePastBookSuccess = (bookData) => ({
	type: REMOVE_PAST_BOOK_SUCCESS,
	bookData
});

export const REMOVE_PAST_BOOK_ERROR = "REMOVE_PAST_BOOK_ERROR";
export const removePastBookError = (message) => ({
	type: REMOVE_PAST_BOOK_ERROR,
	message
});

export const JOIN_CLUB_SUCCESS = "JOIN_CLUB_SUCCESS";
export const joinClubSuccess = (joinedClub) => ({
	type: JOIN_CLUB_SUCCESS,
	joinedClub
});

export const JOIN_CLUB_ERROR = "JOIN_CLUB_ERROR";
export const joinClubError = (message) => ({
	type: JOIN_CLUB_ERROR,
	message
});

export const DELETE_JOINED_CLUB_SUCCESS = "DELETE_JOINED_CLUB_SUCCESS";
export const deleteJoinedClubSuccess = (joinedClub) => ({
	type: DELETE_JOINED_CLUB_SUCCESS,
	joinedClub
});

export const DELETE_JOINED_CLUB_ERROR = "DELETE_JOINED_CLUB_ERROR";
export const deleteJoinedClubError = (message) => ({
	type: DELETE_JOINED_CLUB_ERROR,
	message
});

export const CLEAR_ERROR_ACTION = "CLEAR_ERROR_ACTION";
export const clearErrorAction = () => ({
	type: CLEAR_ERROR_ACTION
});

export const deleteJoinedClub = (clubObj) => {
	return dispatch => {
		axios.put('/api/deleteJoinedClub', clubObj)
			.then(function (response) {
				dispatch(deleteJoinedClubSuccess(response.data.joinedClub));
			})
			.catch(function (error,) {
				dispatch(deleteJoinedClubError(error.response.data.message));				
			});	
	}
}

export const joinClubAction = (clubObj) => {
	return dispatch => {
		axios.put('/api/joinClub', clubObj)
			.then(function (response) {
				dispatch(joinClubSuccess(response.data.joinedClub));
				dispatch(updateClubMembers(clubObj));
			})
			.catch(function (error,) {
				dispatch(joinClubError(error.response.data.message));				
			});			
	}
}

export const shelfPastBookAction = (shelvedBook) => {
	return dispatch => {
		axios.put('/api/shelfPastBook', shelvedBook)
			.then(function (response) {
				dispatch(shelfPastBookSuccess(response.data.pastBookShelf));
			})
			.catch(function (error) {
				dispatch(shelfPastBookError(error.message));				
			});
	}
};

export const removePastBookAction = (bookObj) => {
	return dispatch => {
		axios.put('/api/removePastBook', bookObj)
			.then(function (response) {
				dispatch(removePastBookSuccess(response.data.pastBookShelf));
			})
			.catch(function (error) {
				dispatch(removePastBookError(error.message));
			}); 
	}
};

export const shelfFutureBookAction = (shelvedBook) => {
	return dispatch => {
		axios.put('/api/shelfFutureBook', shelvedBook)
			.then(function (response) {
				dispatch(shelfFutureBookSuccess(response.data.futureBookShelf));
			})
			.catch(function (error) {
				dispatch(shelfFutureBookError(error.message));				
			});
	}
};

export const removeFutureBookAction = (bookObj) => {
	return dispatch => {
		axios.put('/api/removeFutureBook', bookObj)
			.then(function (response) {
				dispatch(removeFutureBookSuccess(response.data.futureBookShelf));
			})
			.catch(function (error) {
				dispatch(removeFutureBookError(error.message));
			}) 
	}
};

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
		    	dispatch(loginRequestError());
		    });
	}
}

export const submitNewMyClub = (newClubData) => {
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
				dispatch(submitNewMyClubError(data.message));
			}
			else {
				dispatch(submitNewMyClubSuccess(data));				
				dispatch(createNewMyClub(newClubData));
			}
		})
	}
}

