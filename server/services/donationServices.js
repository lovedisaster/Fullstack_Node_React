const cacheServices = require('./cacheServices');

const DonationServices = {
    makeDonation: (amount) => 
        new Promise((resolve, reject) => {
            const currentFundAmount = getAndSetTotal('total', amount);
            resolve({total: currentFundAmount});
        })
}

const getAndSetTotal = function (k, v) {
    let value = cacheServices.getCache(k);
    if (value === undefined) {
        cacheServices.setCache(k, v);
        return 0;
    } else {

        const currentTotal = value;
        
        const newTotal = parseInt(value) + parseInt(v)
        cacheServices.setCache(k, newTotal);
        return cacheServices.getCache(k);
    }
}
module.exports = DonationServices;