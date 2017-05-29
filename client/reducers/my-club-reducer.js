import action from "../actions/user-actions.js";
import {REHYDRATE} from 'redux-persist/constants';

let  initialState = {
	clubName: '',
	clubId: '',
	organizer: '',
	memberCap: 0,
	members: [],
	currentBook: '',
	meetupDate: '',
	commentFeed: [],
	bookReviews: '',
	showNewClubModal: false,
	showEditClubModal: false,
	myClubError: null,
	myClubNav: {
		home: true,
		control: false,
		bookshelves: false,
		reviews: false
	}
}

export default function myClubReducer(state = initialState, action) {
	let nextState = Object.assign({}, state);
	switch (action.type) {
		case REHYDRATE:
		  var incoming = action.payload.myClubReducer
		  if (incoming) return { ...state, ...incoming }
		    return state
		case 'SHOW_NEW_CLUB_MODAL': 
			nextState.showNewClubModal = true;
			return nextState;
		case 'HIDE_NEW_CLUB_MODAL':
			nextState.showNewClubModal = false;
			return nextState;
		case 'SHOW_EDIT_CLUB_MODAL': 
			nextState.showEditClubModal = true;
			return nextState;
		case 'HIDE_EDIT_CLUB_MODAL':
			nextState.showEditClubModal = false;
			return nextState;
		case 'CREATE_NEW_MYCLUB_SUCCESS':
			nextState.clubName = action.data.clubName;
			nextState.clubId = action.data._id;
			nextState.organizer = action.data.organizer;
			nextState.memberCap = action.data.memberCap;
			nextState.currentBook = action.data.currentBook;
			nextState.meetupDate = action.data.meetupDate;
			nextState.commentFeed = [];
			nextState.showNewClubModal = false;
			nextState.showEditClubModal = false;
			return nextState;
		case 'CREATE_NEW_MYCLUB_ERROR':
			nextState.myClubError = action.message;
			return nextState;
		case 'GET_MYCLUB_DATA_SUCCESS':
			nextState.clubName = action.data.clubName;
			nextState.clubId = action.data._id;
			nextState.organizer = action.data.organizer;
			nextState.memberCap = action.data.memberCap;
			nextState.currentBook = action.data.currentBook;
			nextState.meetupDate = action.data.meetupDate;
			nextState.commentFeed = action.data.commentFeed;
			nextState.members = action.data.members;
			nextState.showNewClubModal = false;
			nextState.showEditClubModal = false;
		case 'GET_MYCLUB_DATA_ERROR':
			nextState.myClubError = action.message;
			return nextState;
		case 'DELETE_CLUB_SUCCESS':
			nextState = initialState;
			return nextState;
		case 'ENTER_COMMENT_SUCCESS':
			nextState.commentFeed = action.commentFeed;
			return nextState;
		case 'GET_BOOK_REVIEW_SUCCESS':
			nextState.bookReviews = action.data;
			return nextState;
		case 'MYCLUB_NAV':
			nextState.myClubNav = action.component;
			return nextState;
		default:
			return nextState;
	}
	return nextState
}

