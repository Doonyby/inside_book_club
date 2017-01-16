import action from "../actions/user-actions.js";

let  initialState = {
	clubName: '',
	organizer: '',
	memberCap: 0,
	members: [],
	requestingMembers: [],
	invitedMembers: [],
	currentBook: '',
	meetupDate: '',
	commentFeed: [],
	showNewClubModal: false,
	showEditClubModal: false,
	myClubError: null
}

export default function myClubReducer(state = initialState, action) {
	let nextState = Object.assign({}, state);
	switch (action.type) {
		case 'SHOW_NEW_CLUB_MODAL': 
			nextState.showNewClubModal = true;
			return nextState;
		case 'HIDE_NEW_CLUB_MODAL':
			nextState.showNewClubModal = false;
			return nextState;
		case 'CREATE_NEW_MYCLUB_SUCCESS':
			nextState.clubName = action.data.clubName;
			nextState.organizer = action.data.organizer;
			nextState.memberCap = action.data.memberCap;
			nextState.members = nextState.members.concat(action.data.organizer);
			nextState.currentBook = action.data.currentBook;
			nextState.meetupDate = action.data.meetupDate;
			nextState.showNewClubModal = false;
			nextState.showEditClubModal = false;
			return nextState;
		case 'CREATE_NEW_MYCLUB_ERROR':
			nextState.myClubError = action.message;
		case 'GET_MYCLUB_DATA_SUCCESS':
			nextState.clubName = action.data.clubName;
			nextState.organizer = action.data.organizer;
			nextState.memberCap = action.data.memberCap;
			nextState.members = nextState.members.concat(action.data.organizer);
			nextState.currentBook = action.data.currentBook;
			nextState.meetupDate = action.data.meetupDate;
			nextState.showNewClubModal = false;
			nextState.showEditClubModal = false;
		case 'GET_MYCLUB_DATA_ERROR':
			nextState.myClubError = action.message;
		case 'SHOW_EDIT_CLUB_MODAL': 
			nextState.showEditClubModal = true;
			return nextState;
		case 'HIDE_EDIT_CLUB_MODAL':
			nextState.showEditClubModal = false;
			return nextState;
		default:
			return nextState;
	}
	return nextState
}

