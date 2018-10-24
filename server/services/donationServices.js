const cacheServices = require('./cacheServices');

const DonationServices = {
    makeDonation: (amount) => 
        new Promise((resolve, reject) => {
            const currentFundAmount = getAndSetTotal('total', amount);
            resolve({total: currentFundAmount});
        }),
    getDonationTotal: () => 
        new Promise((resolve, reject) => {
            const currentFundAmount = getTotal('total');
            resolve({total: currentFundAmount});
        })
}

const getAndSetTotal = function (k, v) {
    let value = cacheServices.getCache(k);
    if (value === undefined || !value) {
        cacheServices.setCache(k, v);
        return v;
    } else {
        const currentTotal = value;
        const newTotal = parseInt(value) + parseInt(v)
        cacheServices.setCache(k, newTotal);
        return cacheServices.getCache(k);
    }
}
const getTotal = function (k) {
    let value = cacheServices.getCache(k);
    if (value === undefined) {
        return 0;
    } else {
        return cacheServices.getCache(k);
    }
}

module.exports = DonationServices;