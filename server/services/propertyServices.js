const properties = require('../data/properties');
const cacheServices = require('./cacheServices');
const PropertyListServices = {
     getPropertyList : () =>
        new Promise((resolve, reject) => {
            resolve(properties.results);
        }),

     addProperty : (propertyID) => 
        new Promise((resolve, reject) => {
            //Get property by id
            const newProperty = getPropertyByID(properties,propertyID);
            //Get current property from DB / Cache
            let savedProperties = [];
            if(newProperty){
                savedProperties = getSavedProperties('savedProperties', newProperty);
            }
            resolve(savedProperties);
        })
}   

const getPropertyByID = function(properties, id){
    const newProperty = properties.results.filter(
        item => item.id === id
    )
    return newProperty;
}

const getSavedProperties = function(k, v){
    const value = cacheServices.getCache(k);
    if(value === undefined){
        cacheServices.setCache(k, v);
        return v;
    }else{
        cacheServices.setCache(k, [...value, ...v]) 
        return [...value, ...v];
    }
}
module.exports = PropertyListServices;