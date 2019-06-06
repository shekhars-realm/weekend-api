"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
const Promise = require("bluebird");
const _ = require("lodash");
const moment = require('moment');

//========================== Load internal modules ====================
var appUtils = require("../../../applibrary/apputils");
var userservice = require("../services/userservice");
const jwtHandler = require("../../../applibrary/jwthandler");
const constants = require("../../../applibrary/appconstants");
const appexceptions = require("../../../applibrary/appexceptions");
const eventEmitter = appUtils.emitter;
const config = require("../../../config");

// Load logger
const logger = require('../../../logger');
let IMAGE_BASE_URL = config.env.IMAGE_BASE_URL;
let DOCS_BASE_URL = config.env.DOCS_BASE_URL;
//========================== Load modules end ========================

/**
 * @function register
 * user sign up
 * @param {Object} signUpInfo signUp details
 */
function register(signUpInfo) {
    return userservice.registerUser(signUpInfo)
        .bind({})
        .then(function (user) {
            this.user = JSON.parse(JSON.stringify(user));
            return jwtHandler.genJwtToken(this.user._id);
        })
        .then(function (resp) {
            return {user: this.user};
        })
}

/**
 * @function login
 * user login
 * @param {Object} loginInfo login details
 */
function login(loginInfo) {
    return userservice.login(loginInfo)
        .bind({})
        .then(function (user) {
            this.user = JSON.parse(JSON.stringify(user));
            return jwtHandler.genJwtToken(user, loginInfo);
        })
        .then(function (resp) {
            this.user.token = resp
            return {user: this.user};
        });
}


//========================== Load Modules End ==============================================

//========================== Export Module Start ===========================================

module.exports = {
    register,
    login
};

//========================== Export Module End ==============================================
