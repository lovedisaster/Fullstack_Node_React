const cacheServices = require('./cacheServices');

const DonationServices = {
    makeDonation: (amount) => 
        new Promise((resolve, reject) => {
            const currentFundAmount = setCache('total', amount);
            resolve({total: currentFundAmount});
        }),
    getCurrentDonation: () => 
        new Promise((resolve, reject) => {
            const currentFundAmount = getCache('total');
            resolve({total: currentFundAmount});
        }),
    getDonationTotal: () => 
        new Promise((resolve, reject) => {
            const currentFundAmount = getTotal('total');
            resolve({total: currentFundAmount});
        })
}

const setCache = function (k, v) {
    let value = cacheServices.getCache(k);

    if (value === undefined || value === null) {
        cacheServices.setCache(k, v);
        return v;
    } else {
        const newTotal = parseInt(value) + parseInt(v)
        cacheServices.setCache(k, newTotal);
        return cacheServices.getCache(k);
    }
}

const getCache = function (k) {
    let value = cacheServices.getCache(k);
    if (value === undefined || value === null) {
        return 0;
    } else {
        return cacheServices.getCache(k);
    }
}

module.exports = DonationServices;