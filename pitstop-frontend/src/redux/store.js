import { createStore, applyMiddleware, compose } from 'redux'
import tripReducer from './reducers/tripReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    tripReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;