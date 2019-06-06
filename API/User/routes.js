"use strict";

//========================== Load Modules Start ==============================================

const userRouter = require("express").Router();
const userFacade = require('./facade/userfacade');
const resHndlr = require('../../applibrary/responsehandler');
const validators = require('./validators');
const constants = require('../../applibrary/appconstants');
var middleware = require("../../middleware/auth");
var multer = require("../../middleware/multer");
var config = require("../../config");
//========================== Load Modules End =============================================

//========================== Load Modules End ================================================

//========================== Define Routes Start =============================================

//route for add new acct
userRouter.route("/signup")
    .post([middleware.autntctTkn, validators.validateRegister, middleware.headers], function (req, res) {
        let {email,password, firstName,lastName, userName} = req.body;
        userFacade.register({
            email,
            password,
            firstName,
            lastName,
            userName
            })
            .then(function (userDetails) {
                resHndlr.sendSuccess(res, userDetails);
            }).catch(function (err) {
                resHndlr.sendError(res, err);
            });
    });

//route for accountant login
userRouter.route("/login")
    .post([validators.validateLogin, middleware.headers], function (req, res) {
        let {email,password} = req.body;
        userFacade.login({email, password})
            .then(function (loginRes) {
                resHndlr.sendSuccess(res, loginRes);
            }).catch(function (err) {
                resHndlr.sendError(res, err);
            });
    });


//========================== Define Routes End ==============================================


//========================== Export Module Start ============================================

module.exports = userRouter;

//========================== Export Module End ==============================================
