"use strict"

//=================================== Load Modules start ===================================

//=================================== Load external modules=================================
const mongoose = require('mongoose');
//Import logger
const logger = require('../logger');
// plugin bluebird promise in mongoose
mongoose.Promise = require('bluebird');
var redis = require('redis');
var redisPort = 6379;
var redisHost = "127.0.0.1";

//=================================== Load Modules end =====================================


// Connect to Db
function connectDb(env, callback) {
    let dbName = env.mongoDb.dbName;
    let dbOptions = env.mongoDb.options;
    let dbUrl = env.mongoDb.dbUrl;
    console.log(env.TAG)
    if (env.isProd) {
        logger.info("configuring db in " + env.TAG + " mode");
    } else {
        logger.info("configuring db in " + env.TAG + " mode");
        dbUrl = dbUrl + dbName;
        mongoose.set('debug', true);
    }

    logger.info("connecting to -> " + dbUrl);
    mongoose.connect(dbUrl, dbOptions);

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function () {
        logger.info('connected to DB', dbName, 'at', dbUrl);
        callback()
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        logger.info('DB connection error: ' + err);
        callback(err)
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        logger.info('DB connection disconnected');
        callback("DB connection disconnected")
    });
}

var client = redis.createClient(redisPort, redisHost);
var connectRedis = function (env, callback) {
    client.select(env.redisDb.redisDBIndex, function (err, res) {
        if (err) {
            logger.error(err);
            callback(err, null)
        } else {
            callback(null, res);
        }
    });
    client.on("error", function (err) {
        logger.error(err);
        callback(err, null);
    });
};


module.exports = {
    connectDb,
    connectRedis,
    client
}
