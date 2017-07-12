const express = require('express'),
    path = require('path'),
    router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../..', 'client', 'property-list.html'));
});

module.exports = router;