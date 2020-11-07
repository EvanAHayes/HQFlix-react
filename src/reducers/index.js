//help wire everything up
import {combineReducers} from 'redux';
import securityReducer from './securityReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({ 
    security: securityReducer,
    errors: errorsReducer, 
})