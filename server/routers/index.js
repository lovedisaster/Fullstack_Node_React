 module.exports = {
     router : function (app) {

        //Expose some basic elements to all routes down the chain
        app.use(function (req, res, next) {
            app.use('/property-list', require('./property-list'));
            next();
        });
        
        return app;
    }
 }