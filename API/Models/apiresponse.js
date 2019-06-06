"use strict";

//========================== Load Modules Start ==========================

//========================== Load External Modules ==========================

//========================== Load Internal Modules ==========================

var constants = require("../../applibrary/appconstants");
const appUtils =require("../../applibrary/apputils");

//========================== Load Modules End ==========================

//========================== Class Definitions Start =====================

class APIResponse {
    constructor(sc, result) {
        this.sc = sc;
        if (sc == constants.STATUS_CODE.SUCCESS) {
            result ? this.rs = result : constants.EMPTY;
            this.er = [];
        } else {
        	this.rs = {};
            this.er = [];
            result ? this.er.push(result) : constants.EMPTY;
        }
        this.ts = appUtils.createUTCTimeStamp();
    }
}

//========================== Class Definitions End =======================

//========================== Export module start ==================================

module.exports = APIResponse;

//========================== Export module end ==================================
