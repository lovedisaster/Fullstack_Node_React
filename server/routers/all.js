const express = require('express'),
    path = require('path'),
    config = require('../../config');
    router = express.Router();

router.get('/*', function(req, res) {
    console.log(config.isProd);
    res.render(path.resolve(config.paths.server_pages + '/index'), { isProd: config.isProd});
});

module.exports = router;