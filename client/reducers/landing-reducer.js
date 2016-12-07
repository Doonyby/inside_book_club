import actions from "../actions/landing-actions.js";

const initialState = {
	greeting: 'Hello From landing'
}

export default function landingReducer(state = initialState, action) {
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


