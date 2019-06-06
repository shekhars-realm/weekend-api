"use strict";

//========================== Load Modules Start ===========================

var cron = require("cron");

//========================== Load External Module =========================

//========================== Load Modules End =============================

//Cron will run in every 5 minute to update status (overdue and declined) of booking
function updateStatusOfBooking(callback) {
    return cron.job("0 */5 * * * *", callback);
    //return cron.job("* * 23 * * *", callback);
};
//Cron will run in every 15 minute to send booking appointment reminder
function sendBooikngAppointmentReminder(callback) {
    return cron.job("0 */15 * * * *", callback);
    //return cron.job("* * 23 * * *", callback);
};
//Cron will run at 5 pm everyday(1 hr now)
function sendBookingEmailReminder(callback) {
    return cron.job("0 */15 * * * *", callback);
    //return cron.job("* * 23 * * *", callback);
};

//========================== Export Module Start ===========================
module.exports = {
    updateStatusOfBooking,
    sendBooikngAppointmentReminder,
    sendBookingEmailReminder
};

//========================== Export Module   End ===========================
