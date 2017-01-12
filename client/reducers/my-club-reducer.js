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
			return nextState;
		case 'CREATE_NEW_MYCLUB_ERROR':
			nextState.myClubError = action.message;
		default:
			return nextState;
	}
	return nextState
}

