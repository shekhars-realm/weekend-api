/**
 * Revel App Start Script
 */

//Import Config
const config = require('./config');
// Import logger
const logger = require('./logger');
config.configDb.connectDb(config.env, (err) => {
    if (err) {
        logger.info("exiting the app.");
        logger.error(err);
        return;
    }
    config.configDb.connectRedis(config.env, (err, res)=> {
        if (err) {
            logger.info("exiting the app.");
            logger.info(err);
            return;
        }

        logger.info({msg:"redis connected",res:res});
        // load external modules
        const express = require("express");

        // init express app
        const app = express();

        // set server home directory
        app.locals.rootDir = __dirname;

        // config express
        config.configExpress(app, config.env);

        // attach the routes to the app
        require("./routes")(app);

        // start server
        app.listen(config.env.appPort, () => {
            logger.info(`Express server listening on ${config.env.appPort}, in ${config.env.TAG} mode`);
            console.log(`Express server listening on ${config.env.appPort}, in ${config.env.TAG} mode`)
        });
    });
});
