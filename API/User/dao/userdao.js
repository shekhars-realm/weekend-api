"use strict";

//========================== Load Modules Start ===========================================

var mongoose = require("mongoose");
var moment = require("moment");
const userDao = require('../../Models/User');
const constants = require("../../../applibrary/appconstants");
const appUtils = require("../../../applibrary/apputils");
const AccountantFieldsToShow = {
    firstName: 1,
    lastName: 1,
    email: 1,
    userName: 1,
    age: 1
};
//========================== Load Modules End ==============================================

/**
 * @function registerNewUser
 * user sign up
 * @param {Object} signUpParams signUp details
 */
function registerNewUser(signUpParams) {
    let ts = appUtils.createUTCTimeStamp();
    signUpParams.cat = ts;
    var user = new userDao(signUpParams);
    return user.save();
}

/**
 * @function login
 * user login
 * @param {Object} loginParams login details
 */
function login(loginParams) {
    let ts = appUtils.createUTCTimeStamp();
    let query = {};
    query.email = loginParams.email;
    query.password = loginParams.password;
    return userDao.findOne(query).lean().exec()
        .bind({})
        .then(function (resp) {
          console.log('in dao', loginParams)
            this.user = resp;
            return this.user;
        })
}

/**
 * @function findEmail
 * find email
 * @param {Object} email email details
 */
function findEmail(email) {
    let query = {};
    query.email = email;
    let projection = {_id: 1, email: 1};
    return userDao.findOne(query, projection).lean().exec();
}

/**
 * @function findUserById
 * find user by id
 * @param {Object} userDtls user details
 */
function findUserById(userDtls) {
    let query = {};
    query._id = userDtls.userId;
    let fields = {_id: 1, userName: 1};
    return userDao.findOne(query, fields).exec();
}

//========================== Export Module Start ==============================

module.exports = {
    registerNewUser,
    login,
    findEmail,
    findUserById
};

//========================== Export Module End ===============================
