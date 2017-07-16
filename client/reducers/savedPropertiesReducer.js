import * as types from '../actions/actionTypes';
import store from '../stores/store';

export default function propertyReducer(store = store.savedProperties, action) {
    switch(action.type){
        case types.ADD_PROPERTY_SUCCESS:
          return action.savedProperties;
        default:
          return store;
    }
}