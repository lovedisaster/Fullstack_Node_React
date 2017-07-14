const properties = require('../data/properties');

const PropertyListServices = {
     getPropertyList : () =>
        new Promise((resolve, reject) => {
            resolve(properties.results);
        })
}

module.exports = PropertyListServices;