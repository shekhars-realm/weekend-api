//========================== Load Modules Start ===========================

//========================== Load External Module =========================
var _ = require("lodash");
var moment = require("moment");

//========================== Load Internal Module =========================
var appUtils = require("../../applibrary/apputils");
var exceptions = require("../../applibrary/appexceptions");
var constants = require("../../applibrary/appconstants");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================

var validateRegister = function (req, res, next) {
    var {email,password, longitude, latitude} = req.body;
    req.body.email = email = _.toLower(email);
    req.body.email = email = email.trim();

    if (!email) {
        return next(exceptions.fieldRequired());
    }
    if (email && !appUtils.isValidEmail(email)) {
        return next(exceptions.invalidEmail());
    }
    if (longitude) {
        longitude = Number(longitude);
    }
    if (latitude) {
        latitude = Number(latitude);
    }
    if (longitude && latitude) {
        req.body.latlng = [];
        req.body.latlng.push(longitude, latitude);
    }
    next();
};

var validateLogin = function (req, res, next) {
    var {email,password} = req.body;
    req.body.email = email = _.toLower(email);
    req.body.email = email = email.trim();

    if (!email || !appUtils.isValidEmail(email)) {
        return next(exceptions.invalidEmail());
    }
    /*if (!password || !appUtils.isValidPassword(password)) {
     return next(exceptions.invalidPassword());
     }*/
    next();

};

var validateForgotPass = function (req, res, next) {
    var {email} = req.body;
    req.body.email = email = _.toLower(email);
    req.body.email = email = email.trim();

    if (!appUtils.isValidEmail(email)) {
        return next(exceptions.invalidEmail());
    }
    next();
};

function validateEditProfile(req, res, next) {
    let {userId, uid,firstName,lastName,pno,dob,homeAddress,profExp,abn,instantBook,longitude,latitude, tfn} = req.body;
    if (uid) {
        req.body.userId = uid;
    }
    if (dob && typeof dob === "string") {
        req.body.dob = _.trim(dob);
    }
    if (instantBook && typeof instantBook === "string") {
        instantBook = req.body.instantBook = parseInt(instantBook)
    }
    if (longitude) {
        longitude = Number(longitude);
    }
    if (latitude) {
        latitude = Number(latitude);
    }
    if (longitude && latitude) {
        req.body.latlng = [];
        req.body.latlng.push(longitude, latitude);
    }
    if (tfn) {
        req.body.tfn = tfn;
    }
    if (firstName) {
        req.body.firstName = _.trim(firstName);
    }
    if (lastName) {
        req.body.lastName = _.trim(lastName);
    }
    next();
};

module.exports = {
    validateRegister,
    validateLogin,
    validateForgotPass,
    validateEditProfile
};
//========================== Export module end ==================================
