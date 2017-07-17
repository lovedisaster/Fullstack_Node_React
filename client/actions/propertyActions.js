import * as types from './actionTypes';
import propertyAPI from '../apis/propertyAPI';

const loadPropertyStatus = function loadPropertyStatus(properties, status) {
  if (status)
    return { type: types.LOAD_PROPERTIES_SUCCESS, properties };
  else
    return { type: types.LOAD_PROPERTIES_FAILED, properties };
}

export function loadProperties() {
  return function (dispatch) {
    return propertyAPI.getProperties()
      .then(
      properties => {
        dispatch(loadPropertyStatus(properties, true))
      }
      ).catch(
      error => {
        console.log("Failed to load properties")
        dispatch(loadPropertyStatus([], false))
      }
      )
  }
}

const loadSavedPropertyStatus = function loadSavedPropertyStatus(savedProperties, status) {
  if (status)
    return { type: types.LOAD_SAVED_PROPERTIES_SUCCESS, savedProperties };
  else
    return { type: types.LOAD_SAVED_PROPERTIES_FAILED, savedProperties };
}

export function loadSavedProperties() {
  return function (dispatch) {
    return propertyAPI.getSavedProperties()
      .then(
      savedProperties => {
        dispatch(loadSavedPropertyStatus(savedProperties, true))
      }
      ).catch(
      error => {
        console.log("Failed to load saved properties")
        dispatch(loadSavedPropertyStatus([], false))
      }
      )
  }
}

const addPropertyStatus = function addPropertyStatus(savedProperties, status) {
  if (status)
    return { type: types.ADD_PROPERTY_SUCCESS, savedProperties };
  else
    return { type: types.ADD_PROPERTY_FAIL, savedProperties };
}

export function addProperty(propertyID) {
  return function (dispatch) {
    return propertyAPI.addProperty(propertyID)
      .then(
      savedProperties => {
        dispatch(addPropertyStatus(savedProperties, true))
        return true;
      }
      ).catch(
        error => {
          console.log("Failed to add property, ID : " + propertyID)
          dispatch(addPropertyStatus([], false))
        }
      )
  }
}

const deletePropertyStatus = function deletePropertyStatus(savedProperties, status) {
  if (status)
    return { type: types.DELETE_PROPERTY_SUCCESS, savedProperties };
  else
    return { type: types.DELETE_PROPERTY_FAIL, savedProperties };
}

export function deleteProperty(propertyID) {
  return function (dispatch) {
    return propertyAPI.deleteProperty(propertyID)
      .then(
      savedProperties => {
        dispatch(deletePropertyStatus(savedProperties, true))
        return true;
      }
      ).catch(
        error => {
          console.log("Failed to delete property, ID : " + propertyID)
          dispatch(deletePropertyStatus([], false))
        }
      )
  }
}