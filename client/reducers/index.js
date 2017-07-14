import {combineReducers} from 'redux';
import properties from './propertyReducer';

const rootReducer = combineReducers({
   properties
});

export default rootReducer;