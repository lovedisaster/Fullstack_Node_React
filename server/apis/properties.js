var express = require('express'),
  router = express.Router(),
  propertyServices = require('../services/propertyServices'),
  noCache = require('connect-nocache')();

router.post('/properties/', noCache, function (req, res) {
  //Get properties for users, 
    propertyServices
    .getPropertyList()
    .then(properties => {
      res.json(properties)
    })
});

module.exports = router;