import { redux, createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import { autoRehydrate } from 'redux-persist';
import rootReducer from './reducers/index';



const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 compose (applyMiddleware(thunk), autoRehydrate({log: true})));
console.log('store', store);

export default store;