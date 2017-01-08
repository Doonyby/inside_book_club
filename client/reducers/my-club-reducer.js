import actions from "../actions/user-actions.js";

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
	showNewClubModal: false
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
	}
	return nextState
}

