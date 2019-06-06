'use strict';

//========================== Load Modules Start =============================

//========================== Load External Modules ==========================
var Promise = require("bluebird");
var jwt = Promise.promisifyAll(require("jsonwebtoken"));
var crypto = require('crypto');
//========================== Load Internal Modules ==========================
const exceptions = require("../applibrary/appexceptions");
var JWT_ALGORITHM = 'RS256';
var JWT_SECRET_KEY = "login_secret_key_to_save_data";
const dbConfig = require('../config');
const redisCli = require("../cacheclient/redis.js");
const JWT_TOKEN_EXPIRE_TIME = require("../applibrary/appconstants").JWT_TOKEN_EXPIRE_TIME;
//========================== Load Internal Modules ===========================
//========================== Load Modules End ================================

function genUsrToken(user, setExpire) {
    var options = {};
    options.expiresIn = JWT_TOKEN_EXPIRE_TIME;
    /*if (setExpire) {
     options.expiresIn = EMAIL_LINK_EXP_TIME;
     }*/
    return jwt.signAsync(user, JWT_SECRET_KEY, options)
        .bind({})
        .then(function (jwtToken) {
            let hashKey = crypto.randomBytes(20).toString('hex');
            this.userToken = hashKey;
            let params = {};
            params.userToken = hashKey;
            params.jwtToken = jwtToken;
            params.uid = user.userId;
            return redisCli.setJWTToken(params);
        })
        .then(function (saveTknRslt) {
            return this.userToken;
        })
        .catch(function (err) {
            console.log(err);
            throw new exceptions.tokenGenException()
        })
}

function verifyUsrToken(acsTokn) {
    return redisCli.getValue(acsTokn)
        .bind({})
        .then(function (rslt) {
            if (!rslt) {
                this.err = true;
                throw exceptions.sessionExpired();
            }
            let tokenDetails = JSON.parse(rslt);
            this.jwtToken = tokenDetails.jwtToken;
            this.userId = tokenDetails.uid;
            return redisCli.getValue(this.userId)
        })
        .then(function (tokenRslt) {
            if (tokenRslt == this.jwtToken) {
                return jwt.verifyAsync(this.jwtToken, JWT_SECRET_KEY)
            }
            this.err = true;
            throw exceptions.sessionExpired();
        })
        .then(function (tokenPayload) {
            return tokenPayload;
        })
        .catch(function (err) {
            if (!this.err) {
                throw exceptions.unauthorizeAccess(err);
            }
            throw err;
        });

}

function genJwtToken(user, setExpire) {
    var options = {};
    //options.expiresIn = JWT_TOKEN_EXPIRE_TIME;
    return jwt.signAsync(user, JWT_SECRET_KEY, options)
        .then(function (jwtToken) {
            return jwtToken;
        })
        .catch(function (err) {
            throw new exceptions.tokenGenException()
        })
}

function verifyJwtToken(acsTokn) {
    return jwt.verifyAsync(acsTokn, JWT_SECRET_KEY)
        .then(function (tokenPayload) {
            return tokenPayload;
        })
        .catch(function (err) {
            throw new exceptions.unauthorizeAccess(err);
        })
}

function removeUserToken(tokenInfo) {
    let removeUserIdPrms = redisCli.deleteKey(tokenInfo.userId);
    let removeUserToken = redisCli.deleteKey(tokenInfo.accessToken);
    return Promise.join(removeUserIdPrms, removeUserToken)
        .then(function (result) {
            return result;
        })
        .catch(function (err) {
            throw  err
        });
}

module.exports = {
    genUsrToken,
    verifyUsrToken,
    genJwtToken,
    verifyJwtToken,
    removeUserToken
};
