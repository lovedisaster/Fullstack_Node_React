const properties = require('../data/properties');

const PropertyListServices = {
     getPropertyList : () =>
        new Promise((resolve, reject) => {
            resolve(properties.results);
        }),

     addProperty : (propertyID) => 
        new Promise((resolve, reject) => {
            //Get property by id
            resolve(getPropertyByID(properties,propertyID));
        })
}   

const getPropertyByID = function(properties, id){
    let savedProperties = [];
    const newProperty = properties.results.map(
        item => {
            if(item.id === id){
                return item;
            }
        }
    )
    return [...savedProperties, ...newProperty];
}
module.exports = PropertyListServices;