var express = require('express'),
  router = express.Router(),
  propertyServices = require('../services/propertyServices'),
  noCache = require('connect-nocache')();

router.post('/properties/', function (req, res) {
  //Get properties for users, 
    if(req.body && req.body.token === '123'){
          propertyServices
          .getPropertyList()
          .then(properties => {
            res.json(properties)
          }).catch(e => {})
    }else{
      res.json('');
    }
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

router.post('/properties/delete/:id', noCache, function (req, res) {
   propertyServices
   .deleteProperty(req.params.id)
   .then(savedProperties => {
     res.json(savedProperties)
   })
});

module.exports = router;