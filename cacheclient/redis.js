'use strict';

//========================== Load Modules Start ==========================

//========================== Load External Modules ==========================

const dbConfig = require('../config/dbconfig');
var redisClient = dbConfig.client;
const Promise = require("bluebird");
const redis = Promise.promisifyAll(redisClient);
var appConstant = require("../applibrary/appconstants");
//========================== Load Internal Modules ==========================
//========================== Load Modules End ==========================

var setValue = function (key, value) {
    return redisClient.setAsync(key, value)
        .then(function (result) {
            return result
        })
        .catch(function (err) {
            throw err
        })
};


var getValue = function (key) {
    return redisClient.getAsync(key)
        .then(function (result) {
            return result
        })
        .catch(function (err) {
            throw err
        })
};


//value in JSON (key value pair) form
var hmSet = function (key, value) {
    redisClient.hmset(key, value, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
};


var deleteKey = function (key) {
    return redisClient.delAsync(key)
        .then(function (result) {
            return result
        })
        .catch(function (err) {
            throw err;
        })
};

var setJWTToken = function (params) {
    let key = params.userToken;
    let value = {jwtToken: params.jwtToken, uid: params.uid};
    let cacheToken = JSON.stringify(value);
    let saveTKnPrms = setValue(key, cacheToken);
    let userTokenKey = params.uid;
    let userToken = params.jwtToken;
    let saveUsrTknPrms = setValue(userTokenKey, userToken);
    return Promise.join(saveTKnPrms, saveUsrTknPrms)
        .then(function (result) {
            return result
        })
        .catch(function (err) {
            throw err;
        })
};

module.exports = {
    setJWTToken,
    getValue,
    deleteKey,
    setValue
};
