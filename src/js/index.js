import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import { requestLocation, requestForecast } from './actions';

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
);

// For testing in console
window.store = store;
window.actions = { requestLocation, requestForecast };
