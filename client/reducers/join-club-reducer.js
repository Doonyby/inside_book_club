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
	generateClubList: '',
	showNewClubModal: false,
	showEditClubModal: false,
	myClubError: null
}

export default function joinClubReducer(state = initialState, action) {
	let nextState = Object.assign({}, state);
	switch (action.type) {
		case REHYDRATE:
		  var incoming = action.payload.joinClubReducer
		  if (incoming) return { ...state, ...incoming }
		    return state
		case 'GET_JOINCLUB_DATA_SUCCESS':
			nextState.clubName = action.data.clubName;
			nextState.clubId = action.data._id;
			nextState.organizer = action.data.organizer;
			nextState.memberCap = action.data.memberCap;
			nextState.currentBook = action.data.currentBook;
			nextState.meetupDate = action.data.meetupDate;
			nextState.commentFeed = action.data.commentFeed;
			nextState.members = action.data.members;
			nextState.generateClubList = '';
			nextState.showNewClubModal = false;
			nextState.showEditClubModal = false;
			return nextState;
		case 'GET_JOINCLUB_DATA_ERROR':
			nextState.myClubError = action.message;
			return nextState;
		case 'GENERATE_CLUB_LIST_SUCCESS':
			nextState.generateClubList = action.data;
			return nextState;
		case 'ENTER_JOIN_COMMENT_SUCCESS':
			nextState.commentFeed = action.commentFeed;
			return nextState;
		default:
			return nextState;
	}
	return nextState
}




