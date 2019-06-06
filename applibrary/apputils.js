"use strict";

//========================== Load Modules Start ===========================

//========================== Load External Module =========================

const sha256 = require('sha256');
const EventEmitter = require('events');
const path = require("path");
const mongoose = require("mongoose");
const constants = require("./appconstants");
const moment = require("moment");
const fs = require('fs');
//========================== Load Modules End =============================

//========================== Export Module Start ===========================

const emitter = new EventEmitter();

/**
 * return user home
 * @returns {*}
 */
function getUserHome() {
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
};

function getNodeEnv() {
    return process.env.NODE_ENV;
};

/**
 * returns if email is valid or not
 * @returns {boolean}
 */
function isValidEmail(email) {
    var pattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
    return new RegExp(pattern).test(email);
};

/**
 * returns if password is valid or not
 * @returns {boolean}
 */
function isValidPassword(password) {
    var pattern = /^((?=.*[A-Z])(?=.*[0-9])(?=.{8,16}))|((?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16}))|((?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,16}))/;
    return new RegExp(pattern).test(password);
};

/**
 * returns if name is valid or not
 * @returns {boolean}
 */
function isValidName(name) {
    var regex = /^[a-zA-Z ]{2,30}$/;
    return new RegExp(regex).test(name);
};

/**
 * returns if zipCode is valid or not (for US only)
 * @returns {boolean}
 */
function createHashSHA256(pass) {
    return sha256(pass)
};

/**
 * returns random string for password
 * @returns {string}
 */
var getRandomPassword = function () {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8)
};


/**
 * returns random number for password
 * @returns {string}
 */
var generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


/**
 * returns random number for password
 * @returns {string}
 */
var generateRandomString = function () {
    return Date.now().toString(36).slice(-4)
};


function createUTCTimeStamp() {
    let utcTs = moment().utc();
    return Number(utcTs);
};

function parseBoolean(value) {
    if (value == 1 || value == "1" || value == "true" || value == "True" || value == "TRUE"
        || value == true || value == "yes" || value == "Yes" || value == "YES") {
        return true
    }
    return false;
};

function getProjectHomeDir() {
    return path.join(__dirname, "../")
};

function convertToMongoIds(ids) {
    let mongoIds = [];
    for (let i = 0; i < ids.length; i++) {
        /* console.log(ids[0]);
         console.log(typeof ids[0]);
         let id = ids[i].toString();*/
        mongoIds.push(mongoose.Types.ObjectId(ids[i]))
    }
    return mongoIds;
};

function getDistanceFromLatLon(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
};

function deg2rad(deg) {
    return deg * (Math.PI / 180)
};

function getNextDate() {
    /*var today = moment();
     var tomorrow = moment(today).add('days', 1);
     let date = new Date();
     date.setDate(date.getDate() + 1);
     return date;*/

    var today = moment().utc();
    var tomorrow = moment(today).utc().add('days', 1);
    return tomorrow.startOf('day');
};

function getNextThreeMonthDateFromCurrentDate(currentDate) {
    var futureMonth = moment(currentDate).utc().add(3, 'M');
    var futureMonthDate = moment(futureMonth).utc().startOf('day');
    return futureMonthDate;
};

//Return current date
function getCurrentDate() {
    return Number(moment().utc().startOf('day'));
};

//Return current given date
function getDateFromMs(datetimeInMs) {
    return Number(moment(datetimeInMs).utc().startOf('day'));
};

function getDOBFormat(dob) {
    var localFormat = 'MM/DD/YYYY';
    return moment(dob).format(localFormat);
};

// Method to get last days timestamp
function getLastDaysTimeStamp(day) {
    var prevDay = moment().utc().add(-day, 'days');
    var prevDayTimestamp = moment(prevDay).utc().startOf('day');
    return Number(prevDayTimestamp);
};

// Method to get current endOf day timestamp
function getCurrentEndOfDayTimeStamp() {
    var endOfDayTimeStamp = moment().utc().endOf('day');
    return Number(endOfDayTimeStamp);
};

// Method to get previous day timestamp
function getPreviousDayTimeStamp() {
    var prevDay = moment().utc().add(-1, 'days');
    var prevDayTimestamp = moment(prevDay).utc().startOf('day');
    return Number(prevDayTimestamp);
};

// Method to get Month to date timestamp
function getMonthToDateUtcTimeStamp() {
    return Number(moment().utc().startOf('month'));
};

//Method to get
function getPreviousThreeMonthDateTimeStampFromCurrentDate() {
    let prevMonth = moment().utc().add(-3, 'M');
    let prevMonthDate = moment(prevMonth).utc().startOf('day');
    return Number(prevMonthDate);
};

String.prototype.replaceAll = function (hash) {
    var string = this, key;
    for (key in hash) string = string.replace(new RegExp('\\{' + key + '\\}', 'gm'), hash[key]);
    return string
}

// Method to create directory if does not exists
function createDirectory(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
};

function getDateTimeFromTimestamp(time) {
    let dateTime = moment(time).utc().format("DD/MM/YY hh:mm:ss");
    return dateTime;
};

function get48HourFromCurrentTime() {
    var curtime = Number(moment().utc());
    let time = Number(moment(curtime).utc().add(48, 'hours'));
    return time;
}

function getDayFromDateTime(dateTime) {
    return moment(dateTime).utc().format("dddd");
};

function getDateFormatFromDateTimeStamp(date) {
    return moment(date).utc().format("DD/MM/YY");
};

function getTimeFormatFromDateTimeStamp(date) {
    return moment(date).utc().format("hh:mm");
};

//for AWST TimeZone
function getDayFromDateTimeForAwst(dateTime) {
    dateTime = dateTime + 28800000 //Timesecond for AWST and UTC Difference
    return moment(dateTime).utc().format("dddd");
};

function getDateFormatFromDateTimeStampForAwst(date) {
    date = date + 28800000 //Timesecond for AWST and UTC Difference
    return moment(date).utc().format("DD/MM/YY");
};

function getTimeFormatFromDateTimeStampForAwst(date) {
    date = date + 28800000 //Timesecond for AWST and UTC Difference
    return moment(date).utc().format("hh:mm A");
};
//end of AWST Timings

function getDateFromUTCTimeStamp(dateTime) {
    return Number(moment(dateTime).utc().startOf('day'));
};

function getEndDayTimeStampFromUTCTimeStamp(dateTime) {
    return Number(moment(dateTime).utc().endOf('day'));
};

function getCurrentDayStartTime() {
    return Number(moment().utc().add(48, 'hours').startOf('day'));
};

function add24HoursInCurrentTime() {
    return Number(moment().utc().add(24, 'hours'));
}
//========================== Export Module Start ===========================

module.exports = {
    getUserHome,
    getNodeEnv,
    isValidEmail,
    isValidPassword,
    isValidName,
    createHashSHA256,
    getRandomPassword,
    createUTCTimeStamp,
    parseBoolean,
    getProjectHomeDir,
    emitter,
    generateRandomNumber,
    generateRandomString,
    convertToMongoIds,
    getDistanceFromLatLon,
    getNextDate,
    getNextThreeMonthDateFromCurrentDate,
    getCurrentDate,
    getDateFromMs,
    getDOBFormat,
    getLastDaysTimeStamp,
    getCurrentEndOfDayTimeStamp,
    getPreviousDayTimeStamp,
    getMonthToDateUtcTimeStamp,
    getPreviousThreeMonthDateTimeStampFromCurrentDate,
    createDirectory,
    getDateTimeFromTimestamp,
    get48HourFromCurrentTime,
    getDayFromDateTime,
    getDateFormatFromDateTimeStamp,
    getTimeFormatFromDateTimeStamp,
    getDateFromUTCTimeStamp,
    getEndDayTimeStampFromUTCTimeStamp,
    getCurrentDayStartTime,
    add24HoursInCurrentTime,
    getDayFromDateTimeForAwst,
    getDateFormatFromDateTimeStampForAwst,
    getTimeFormatFromDateTimeStampForAwst
};

//========================== Export Module End===========================
