"use strict";

//========================== Class Definitions Start =====================

class Exceptions {
    constructor(errorCode, msg, errStackTrace, title) {
        this.code = errorCode;
        this.msg = msg;
        if(title) {
        	this.title = title;
        }        
        if (errStackTrace) {
            this.errors = errStackTrace;
        }
    }
}

//========================== Class Definitions End =======================

//========================== Export module start ==================================

module.exports = Exceptions;

//========================== Export module end ==================================
