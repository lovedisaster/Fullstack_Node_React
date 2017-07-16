import {combineReducers} from 'redux';
import properties from './propertyReducer';
import savedProperties from './savedPropertiesReducer';

const rootReducer = combineReducers({
   properties,
   savedProperties
});

export default rootReducer;