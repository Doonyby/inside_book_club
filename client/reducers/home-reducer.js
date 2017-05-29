import action from "../actions/landing-actions.js";
import {REHYDRATE} from 'redux-persist/constants';

let initialState = {
	name: '',
	username: '',
	email: '',
	id: '',
  myClub: '',
  joinedClub: '',
  futureBookShelf: [],
  pastBookShelf: [],
  error: null,
  myClubError: null,
  joinedClubError: null,
  futureError: null,
  pastError: null,
  showSignupModal: false,
  showLoginModal: false,
  showInfoModal: false,
}

export default function homeReducer(state = initialState, action) {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case REHYDRATE:
      var incoming = action.payload.homeReducer
      if (incoming) return { ...state, ...incoming }
        return state
    case 'SIGN_IN_SUCCESS':
      nextState.name = action.userData.name;
      nextState.username = action.userData.username;
      nextState.email = action.userData.email;
      nextState.id = action.userData._id;
      nextState.myClub = action.userData.myClub;
      nextState.joinedClub = action.userData.joinedClub;
      nextState.futureBookShelf = action.userData.futureBookShelf;
      nextState.pastBookShelf = action.userData.pastBookShelf;
      nextState.error = null;
      nextState.myClubError = null;
      nextState.joinedClubError = null;
      nextState.futureError = null;
      nextState.pastError = null;
      nextState.showSignupModal = false;
      nextState.showLoginModal = false;
      return nextState;
    case 'SHOW_SIGNUP_MODAL': 
      nextState.showSignupModal = true;
      return nextState;
    case 'HIDE_SIGNUP_MODAL':
      nextState.showSignupModal = false;
      return nextState;
    case 'SHOW_LOGIN_MODAL': 
      nextState.showLoginModal = true;
      return nextState;
    case 'HIDE_LOGIN_MODAL':
      nextState.showLoginModal = false;
      return nextState;
    case 'SHOW_INFO_MODAL': 
      nextState.showInfoModal = true;
      return nextState;
    case 'HIDE_INFO_MODAL':
      nextState.showInfoModal = false;
      return nextState;
    case 'SIGN_UP_REQUEST_ERROR':
      nextState.error = action.message;
      return nextState;
    case 'LOGIN_REQUEST_ERROR':
      nextState.error = 'error';
      return nextState;
    case 'SUBMIT_NEW_MYCLUB_SUCCESS':
      nextState.myClub = action.myClubName;
      nextState.myClubError = null;
      return nextState;
    case 'SUBMIT_NEW_MYCLUB_ERROR':
      nextState.myClubError = action.message;
      return nextState;
    case 'CLEAR_ERROR_ACTION':
      nextState = initialState;
      return nextState;
    case 'DELETE_MYCLUB_SUCCESS':
      nextState.myClub = "";
      return nextState;
    case 'SHELF_FUTURE_BOOK_SUCCESS':
      nextState.futureBookShelf = action.bookData;
      return nextState;
    case 'REMOVE_FUTURE_BOOK_SUCCESS':
      nextState.futureBookShelf = action.bookData;
      return nextState;
    case 'SHELF_PAST_BOOK_SUCCESS':
      nextState.pastBookShelf = action.bookData;
      return nextState;
    case 'REMOVE_PAST_BOOK_SUCCESS':
      nextState.pastBookShelf = action.bookData;
      return nextState;
    case 'JOIN_CLUB_SUCCESS': 
      nextState.joinedClub = action.joinedClub;
      nextState.joinedClubError = '';
      return nextState;
    case 'JOIN_CLUB_ERROR':
      nextState.joinedClubError = action.message;
      return nextState;
    case 'DELETE_JOINED_CLUB_SUCCESS':
      nextState.joinedClub = '';
      return nextState;
    default:
      return nextState;
  }
  return nextState
}
