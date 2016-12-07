import actions from "../actions/user-actions.js";

const initialState = {
	greeting: 'hello from user'
}

export default function userReducer(state = initialState, action) {
let nextState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_CAPS':
      return nextState.greeting.toUpperCase();
    case 'ADD_LOWER':
      return nextState.greeting.toLowerCase();
    default:
      return state;
  }
  return state
}
