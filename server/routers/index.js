 module.exports = {
     router : function (app) {

        //Expose some basic elements to all routes down the chain
        app.use(function (req, res, next) {
            app.use('/property-list', require('./property-list'));
            app.use('/api', require('../apis/properties'));

            next();
        });
        
        return app;
    }
 }