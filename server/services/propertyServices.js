const properties = require('../data/properties');
const cacheServices = require('./cacheServices');
const PropertyListServices = {
    getPropertyList: () =>
        new Promise((resolve, reject) => {
            resolve(properties.results);
        }),

    getSavedPropertyList: () =>
        new Promise((resolve, reject) => {
            resolve(cacheServices.getCache('savedProperties'));
        }),

    addProperty: (propertyID) =>
        new Promise((resolve, reject) => {
            //Get property by id
            const newProperty = getPropertyByID(properties, propertyID);
            //Get current property from DB / Cache
            let savedProperties = [];
            if (newProperty) {
                savedProperties = getAndSetSavedProperties('savedProperties', newProperty);
            }
            resolve(savedProperties);
        }),

    deleteProperty: (propertyID) =>
        new Promise((resolve, reject) => {
            resolve(deletePropertyByID(propertyID , 'savedProperties'));
        })
}

const getPropertyByID = function (properties, id) {
    const newProperty = properties.results.filter(
        item => item.id === id
    )
    return newProperty;
}

const deletePropertyByID = function(id, k){
    let savedProperties = cacheServices.getCache(k);
    cacheServices.setCache(k, savedProperties.filter( item => {
        return item.id !== id
    }));
    return cacheServices.getCache(k);
}

const getAndSetSavedProperties = function (k, v) {
    let value = cacheServices.getCache(k);
    if (value === undefined) {
        cacheServices.setCache(k, v);
        return v;
    } else {
        let flag = false;
        value.forEach(item => {
            if (item.id === v[0].id) {
                flag = true;
            }
        })
        flag ? '' : cacheServices.setCache(k, [...value, ...v]);
        return cacheServices.getCache(k);
    }
}
module.exports = PropertyListServices;