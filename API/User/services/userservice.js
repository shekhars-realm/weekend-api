"use strict";

//========================== Load Modules Start =======================

//========================== Load external modules ====================
const promise = require("bluebird");
const moment = require("moment");
const _ = require("lodash");
//========================== Load internal modules ====================
var userDao = require('./../dao/userdao');
var constants = require("../../../applibrary/appconstants");
var exceptions = require("../../../applibrary/appexceptions");
var appUtils = require("../../../applibrary/apputils");
const config = require("../../../config");
const jwtHandler = require("../../../applibrary/jwthandler");
//========================== Load Modules End =========================


/**
 * @function registerUser
 * user registration
 * @param {Object} userInfo user details
 */
function registerUser(userInfo) {
    //userInfo.deviceIds = __parseDeviceIds(userInfo);

    return userDao.registerNewUser(userInfo)
        .then(function (userInfo) {
            return userInfo;
        })
        .catch(function (err) {
            if ((err.code === 11000 && err.errmsg.indexOf("$email_1 dup") > -1) || (err.code === 11000 && err.errmsg.indexOf("email_1 dup") > -1)) {
                throw exceptions.emailAlreadyRegistered();
            }
            if ((err.code === 11000 && err.errmsg.indexOf("$pno_1 dup") > -1) || (err.code === 11000 && err.errmsg.indexOf("pno_1 dup") > -1)) {
                throw exceptions.pnoAlreadyRegistered();
            }
            throw err
        });
}

/**
 * @function login
 * user login
 * @param {Object} loginInfo login details
 */
function login(loginInfo) {
    return userDao.login(loginInfo)
        .bind({})
        .then(function (userInfo) {
          console.log('in service', userInfo)
            if (!userInfo) {
                this.invalidPass = true;
                return userDao.findEmail(loginInfo.email)
            }
            this.userInfo = userInfo;
            return userInfo;
        })
        .then(function (userExist) {
            this.user = userExist;
            if (userExist && (userExist['role'] == constants.ROLE.PAYER && userExist['acStatus'] == constants.STATUS.SIGNUP_INCOMPLETE
               )) {
                return jwtHandler.genJwtToken(userExist._id);
            }
        })
        .then(function (jwtTkn) {
            return this.userInfo;
        });
};
//========================== Export Module Start ==============================

module.exports = {
    registerUser,
    login
};

//========================== Export Module End ===============================
