import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers/counterReducer';

export default createStore(counterReducer, 0, applyMiddleware(thunk));
