"use strict";

//========================== Load Modules Start ===========================

const multer = require('multer');
const path = require('path');
var mkdirp = require('mkdirp');
const crypto = require('crypto');
const constants = require("../applibrary/appconstants");
const customExceptions = require("../applibrary/appexceptions");
//========================== Load Modules End =============================

// define disk storage strategy for multer
var storage = multer.diskStorage({
    // if all files is stored in one path
    // When passing a string, multer will make sure that the directory is created for you.
    //destination: appConst.baseImgPath,

    // if files is stored in different path(user, feedImage, feedVedio)
    //You are responsible for creating the directory when providing destination as a function.
    destination: function (req, file, cb) {
        let imgPath = constants.USR_IMG_PATH;
        mkdirp(imgPath, function (err) {
            if (err) {
                return cb(err)
            }
            return cb(null, imgPath)
        })
    },
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, buffer) {
            if (err) return cb(err);
            cb(null, buffer.toString('hex') + path.extname(file.originalname))
        })
    }
});

var fileFilterImage = function (req, file, cb) {
    var filetypes = constants.SUPPORTED_IMAGE_TYPE;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
        return cb(null, true);
    }
    cb(customExceptions.uploadValidDocs(filetypes));
};

var fileFilterDoc = function (req, file, cb) {
    var filetypes = constants.SUPPORTED_DOC_TYPE;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
        return cb(null, true);
    }
    cb(customExceptions.uploadValidDocs(filetypes));
};

var uploadImage = multer({
    storage: storage,
    fileFilter: fileFilterImage,
    limits: {fileSize: constants.MEDIA_TYPE.IMAGE_MAX_SIZE}
});
var uploadDocs = multer({
    storage: storage,
    fileFilter: fileFilterDoc /*limits: { fileSize: constants.MEDIA_TYPE.DOC_MAX_SIZE }*/
});
//https://github.com/expressjs/multer


//===================================== Implementation ===========================================================

function _singleFile(key) {
    return uploadImage.single(key);
}

function _fileArray(key, count) {
    return uploadDocs.array(key, count);
}

/**
 *  Upload Multiple Files with different keys
 * @param array :: example : [{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]
 * @returns {*}
 * @private
 */
function _randomFiles(array) {
    return uploadDocs.fields(array);
}
//===================================== Exports ===========================================================

module.exports = {
    single: _singleFile,
    array: _fileArray,
    fields: _randomFiles,
    any: uploadImage.any
}
