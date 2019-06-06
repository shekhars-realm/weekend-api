"use strict";

//========================== Load Modules Start ===========================

//========================== Load internal Module =========================
var Promise = require("bluebird");
var exceptions = require("../applibrary/appexceptions");
var constants = require("../applibrary/appconstants");
var jwtHandler = require("../applibrary/jwthandler");
var userDao = require("../API/User/dao/userdao");
//========================== Load Modules End =============================

var __verifyTok = function (acsTokn) {
    return jwtHandler.verifyUsrToken(acsTokn)
        .then(function (tokenPayload) {
            return tokenPayload;
        })
        .catch(function (err) {
            throw err
        })
};

var autntctTkn = function (req, res, next) {
    var acsToken = req.get('authorization');
    if ((req.path == "/signup" || req.path == "/feedback") && !acsToken) {
        next()
    } else {
        __verifyTok(acsToken)
            .bind({})
            .then(function (tokenPayload) {
                this.user = tokenPayload;
                return __checkUserStatus(req, tokenPayload);
            })
            .then(function (resp) {
                if (resp == true) {
                    console.log("resp", this.user)
                    req.body.userId = this.user.userId;
                    req.body.role = this.user.role;
                    req.user = acsToken;
                    next();
                } else {
                    next(resp);
                }
            })
            .catch(function (err) {
                if (err['code'] == constants.LOGOUT_ERROR_CODE) {
                    res.status(constants.RESPONSE_STATUS_CODE.UNAUTHORIZED);
                    next(err);
                } else {
                    res.status(constants.RESPONSE_STATUS_CODE.UNAUTHORIZED);
                    next(exceptions.unauthorizeAccess(err));
                }
            });
    }
};
/**
 * @function __parseDeviceIds
 * parse device ids
 * @param {Object} loginInfo login details
 */
var headers = function (req, res, next) {
    console.log(req.headers, "req.headers")
    let {rid,did,ov,dt} = req.headers;
    let deviceId = {}, dvcs = [];
    if (dt && did) {
        deviceId.dt = parseInt(dt);
        deviceId.rid = rid;
        if (did) {
            deviceId.did = did;
        }
        if (ov) {
            deviceId.ov = ov;
        }
    }
    dvcs.push(deviceId);
    req.body.deviceIds = dvcs;
    next();
};
/**
 * To check user is active or not
 * @private
 */
 function __checkUserStatus(req, user, next) {
     console.log('in SUSPENDED1')
    if ((user && req.path == constants.ACCESS_API_WITHOUT_ACTIVE_STATUS.EDIT_PROFILE && user.role == constants.ROLE.ACCT)
        || (req.path == constants.ACCESS_API_WITHOUT_ACTIVE_STATUS.PAYER_LIST_LOC) || (req.path == constants.ACCESS_API_WITHOUT_ACTIVE_STATUS.UPLOAD_MEDIA) || (req.path == constants.ACCESS_API_WITHOUT_ACTIVE_STATUS.GET_PROFILE) || (req.path == constants.ACCESS_API_WITHOUT_ACTIVE_STATUS.UPLOAD_DOC) || (req.path == constants.ACCESS_API_WITHOUT_ACTIVE_STATUS.LOGOUT)) {
        return new Promise(function (resolve, reject) {
            resolve(true);
        });
    } else {
        return userDao.findUserById(user)
            .then(function (resp) {
                // accountant status
                if (resp && user.role == constants.ROLE.ACCT && resp['acStatus'] == constants.STATUS.INCOMPLETE) {
                    return exceptions.acctStatusIncomplete();
                }
                if (resp && user.role == constants.ROLE.ACCT && resp['acStatus'] == constants.STATUS.DECLINED) {
                    return exceptions.acctStatusDeclined();
                }
                if (resp && user.role == constants.ROLE.ACCT && resp['acStatus'] == constants.STATUS.SUSPENDED) {
                    console.log('in SUSPENDED')
                    return exceptions.acctStatusSuspended();
                }
                if (resp && user.role == constants.ROLE.ACCT && resp['acStatus'] == constants.STATUS.PENDING) {
                    return exceptions.acctStatusPendingApproval();
                }
                // Payer status
                if (resp && user.role == constants.ROLE.PAYER && resp['acStatus'] == constants.STATUS.SUSPENDED) {
                    return exceptions.payerStatusSuspended();
                }
                if (resp && user.role == constants.ROLE.PAYER && resp['acStatus'] == constants.STATUS.SIGNUP_INCOMPLETE) {
                    return exceptions.payerStatusSignUpIncomplete();
                }
                return true;
            });
    }
};
//========================== Export Module Start ===========================

module.exports = {
    autntctTkn,
    headers
};

//========================== Export Module End ===========================
