import * as types from '../actions/actionTypes';
import store from '../stores/store';

export default function propertyReducer(store = store.properties, action) {
    switch(action.type){
        case types.LOAD_PROPERTIES_SUCCESS:
          return action.properties;
        default:
          return store;
    }
}