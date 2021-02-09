// configuration of React Redux //

import reducer from './reducer';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const STORE = createStore(reducer,applyMiddleware(thunk));

export default STORE;