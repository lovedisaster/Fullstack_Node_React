const properties = require('../data/properties');

const PropertyListServices = {
     getPropertyList : () =>
        new Promise((resolve, reject) => {
            resolve(properties.results);
        }),

     addProperty : (propertyID) => 
        new Promise((resolve, reject) => {
            //Get current property from DB / Cache
            let savedProperties = [];
            //Get property by id
            const newProperty = getPropertyByID(properties,propertyID);
            return [...savedProperties, ...newProperty];

        })
}   

const getPropertyByID = function(properties, id){
    const newProperty = properties.results.map(
        item => {
            if(item.id === id){
                return item;
            }
        }
    )
    return newProperty;
}
module.exports = PropertyListServices;