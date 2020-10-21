import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initalState = {}

const middleware = [thunk]

let store;

const reactReduxDevtools =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//set up store and configure so it works with redux dev tools and other browsers
if (window.navigator.userAgent.includes("Chrome") && reactReduxDevtools) {
    store = createStore(rootReducer, initalState, compose(applyMiddleware(...middleware), reactReduxDevtools))
   
} else {
    store = createStore(rootReducer, initalState, compose(applyMiddleware(...middleware)))
}


export default store;

