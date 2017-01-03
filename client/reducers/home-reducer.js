import actions from "../actions/landing-actions.js";

let initialState = {
	name: '',
	username: '',
	email: '',
	id: '',
  error: null
}

export default function homeReducer(state = initialState, action) {
let nextState = Object.assign({}, state);
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      nextState.name = action.userData.name;
      nextState.username = action.userData.username;
      nextState.email = action.userData.email;
      nextState.id = action.userData._id;
      nextState.error = null;
      return nextState;
    case 'SIGN_UP_REQUEST_ERROR':
      nextState.error = action.message;
      return nextState;
    case 'LOGIN_REQUEST_ERROR':
      nextState.error = action.message;
    default:
      return nextState;
  }
  return nextState
}
