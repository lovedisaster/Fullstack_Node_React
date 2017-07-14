var express = require('express'),
  router = express.Router(),
  propertyServices = require('../services/propertyServices'),
  noCache = require('connect-nocache')();

router.get('/properties/:uid', noCache, function (req, res) {
  //Get properties for users, 
  if(req.params.uid === '1'){
    propertyServices
    .getPropertyList()
    .then(properties => {
      res.json(properties)
    })
  }
});

module.exports = router;