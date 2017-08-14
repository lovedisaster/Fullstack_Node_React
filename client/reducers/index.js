import properties from './propertyReducer';
import savedProperties from './savedPropertiesReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
   properties,
   savedProperties
});

export default rootReducer;