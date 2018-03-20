 module.exports = {
     router : function (app) {

        //Expose some basic elements to all routes down the chain
        app.use(function (req, res, next) {
            app.use('/', require('./all'));
            app.use('/api', require('../apis/properties'));
            app.use('/graphql', require('../graphql/express_graphql'));
            next();
        });
        
        return app;
    }
 }