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

router.post('/saved-properties/', noCache, function (req, res) {
  //Get properties for users, 
    propertyServices
    .getSavedPropertyList()
    .then(properties => {
      res.json(properties)
    })
});

router.post('/properties/add/:id', noCache, function (req, res) {
   propertyServices
   .addProperty(req.params.id)
   .then(savedProperties => {
     res.json(savedProperties)
   })
});

module.exports = router;