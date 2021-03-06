"use strict";

//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

//Import Config
const config = require('../config');
// Import logger
const logger = require('../logger');
var constants = require("./appconstants");
var customExceptions = require("./appexceptions");
var APIResponse = require("../API/Models/apiresponse");

//========================== Load Modules End =============================

function hndlError(err, req, res, next) {
    // unhandled error
    sendError(res, err)
}

function sendError(res, err) {
    // if error doesn't has sc than it is an unhandled error,
    // log error, and throw intrnl server error
    if (!err.code) {
        logger.error(err, "unhandled error");
        err = customExceptions.internalServerErr(err)
    }
    var result = new APIResponse(constants.STATUS_CODE.ERROR, err);
    _sendResponse(res, result)
}

function sendSuccessWithMsg(res, msg) {
    var rslt = {msg: msg};
    var result = new APIResponse(constants.STATUS_CODE.SUCCESS, rslt);
    _sendResponse(res, result)
}

function sendSuccess(res, rslt) {
    var result = new APIResponse(constants.STATUS_CODE.SUCCESS, rslt);
    _sendResponse(res, result)
}

//========================== Exposed Action Start ==========================

module.exports = {
    hndlError, sendError, sendSuccess, sendSuccessWithMsg
};

//========================== Exposed Action End ==========================

function _sendResponse(res, rslt) {
    // send status code 200
    return res.send(rslt);
}
