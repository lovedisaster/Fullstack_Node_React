import * as types from './actionTypes';
import propertyAPI from '../apis/propertyAPI';

const loadPropertyStatus = function loadPropertyStatus (properties, status){
  if(status)
    return {type: types.LOAD_PROPERTIES_SUCCESS, properties};
  else 
    return {type: types.LOAD_PROPERTIES_FAILED, properties};
}

export function loadProperties(){
  return function(dispatch){
    return propertyAPI.getProperties()
    .then(
      properties => {
        dispatch(loadPropertyStatus(properties , true))}
    ).catch(
      error => {
          console.log("Failed to load properties")
          dispatch(loadPropertyStatus([], false))
      }
    )
  }
}