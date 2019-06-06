//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

// Load exceptions
var Exception = require("../API/Models/exception");
var appConstant = require("./appconstants");
//========================== Load Modules End =============================

//========================== Export Module Start ===========================

module.exports = {
    internalServerErr: function (err) {
        return new Exception("ERR1", appConstant.ERROR_MESSAGES.INTERNAL_ERROR, err);
    },
    unauthorizeAccess: function (err) {
        return new Exception("ERR2", appConstant.ERROR_MESSAGES.UN_AUTH_ACCESS, err)
    },
    incorrectPass: function () {
        return new Exception("ERR3", appConstant.ERROR_MESSAGES.INCORRECT_PASS)
    },
    emailNotFoundAcct: function () {
        return new Exception("ERR57", appConstant.ERROR_MESSAGES.EMAIL_NOT_FOUND_ACCT)
    },
    emailNotFoundPayer: function () {
        return new Exception("ERR4", appConstant.ERROR_MESSAGES.EMAIL_NOT_FOUND_PAYER)
    },
    tokenGenException: function (err) {
        return new Exception("ERR5", appConstant.ERROR_MESSAGES.ERR_GEN_TKN, err)
    },
    tokenVerifyException: function (err) {
        return new Exception("ERR6", appConstant.ERROR_MESSAGES.BAD_TKN, err)
    },
    invalidEmail: function (err) {
        return new Exception("ERR7", appConstant.ERROR_MESSAGES.INVALID_EMAIL, err)
    },
    invalidPassword: function (err) {
        return new Exception("ERR8", appConstant.ERROR_MESSAGES.INVALID_PASSWORD, err)
    },
    pNoCntEmpty: function (err) {
        return new Exception("ERR9", appConstant.ERROR_MESSAGES.PNO_CANT_EMPTY, err)
    },
    fnCntEmpty: function (err) {
        return new Exception("ERR10", appConstant.ERROR_MESSAGES.FN_CANT_EMPTY, err)
    },
    lnCntEmpty: function (err) {
        return new Exception("ERR11", appConstant.ERROR_MESSAGES.LN_CANT_EMPTY, err)
    },
    emailAlreadyRegistered: function (err) {
        return new Exception("ERR12", appConstant.ERROR_MESSAGES.EMAIL_REGISTER, err)
    },
    pnoAlreadyRegistered: function (err) {
        return new Exception("ERR13", appConstant.ERROR_MESSAGES.PNO_REGISTER, err)
    },
    emailAlreadyDeclined: function () {
        return new Exception("ERR14", appConstant.ERROR_MESSAGES.EMAIL_DECLINED)
    },
    typeCntEmpty: function () {
        return new Exception("ERR15", appConstant.ERROR_MESSAGES.TYPE_CNT_EMPTY)
    },
    passwordLinkExpired: function () {
        return new Exception("ERR16", appConstant.ERROR_MESSAGES.PASS_LINK_EXP)
    },
    userNotFound: function (err) {
        return new Exception("ERR17", appConstant.ERROR_MESSAGES.USER_NOT_FOUND, err);
    },
    startTimestampEmpty: function () {
        return new Exception("ERR16", appConstant.ERROR_MESSAGES.START_TIME_EMPTY)
    },
    endTimestampEmpty: function () {
        return new Exception("ERR17", appConstant.ERROR_MESSAGES.END_TIME_EMPTY)
    },
    maxDistanceEmpty: function () {
        return new Exception("ERR18", appConstant.ERROR_MESSAGES.MAX_DIST_EMPTY)
    },
    repeatWeeklyEmpty: function () {
        return new Exception("ERR19", appConstant.ERROR_MESSAGES.REPEAT_WEEKLY_EMPTY)
    },
    latitudeEmpty: function () {
        return new Exception("ERR20", appConstant.ERROR_MESSAGES.LATITUDE_EMPTY)
    },
    longitudeEmpty: function () {
        return new Exception("ERR21", appConstant.ERROR_MESSAGES.LONGITUDE_EMPTY)
    },
    invalidAbn: function () {
        return new Exception("ERR22", appConstant.ERROR_MESSAGES.INVALID_ABN)
    },
    fieldRequired: function () {
        return new Exception("ERR23", appConstant.ERROR_MESSAGES.FIELD_REQUIRED)
    },
    invalidMaxChars: function () {
        return new Exception("ERR24", appConstant.ERROR_MESSAGES.INVALID_MAX_CHARS)
    },
    emailNotVerified: function () {
        return new Exception("ERR25", appConstant.ERROR_MESSAGES.EMAIL_NOT_VERIFIED, null, appConstant.TITLES.EMAIL_NOT_VERIFIED)
    },
    adminEmailAlreadyRegistered: function (err) {
        return new Exception("ERR26", appConstant.ERROR_MESSAGES.ADMIN_EMAIL_REGISTER, err)
    },
    accountantIdCantEmpty: function () {
        return new Exception("ERR27", appConstant.ERROR_MESSAGES.ACCOUNT_ID_CANT_EMPTY)
    },
    tfnCantEmpty: function () {
        return new Exception("ERR28", appConstant.ERROR_MESSAGES.TFN_CANT_EMPTY)
    },
    estimatedCostCantEmpty: function () {
        return new Exception("ERR29", appConstant.ERROR_MESSAGES.ESTIMATED_COST_CANT_EMPTY)
    },
    noOfReturnCantEmpty: function () {
        return new Exception("ERR30", appConstant.ERROR_MESSAGES.NO_OF_RETURN_CANT_EMPTY)
    },
    bookinDateCantEmpty: function () {
        return new Exception("ERR31", appConstant.ERROR_MESSAGES.BOOKING_DATE_CANT_EMPTY)
    },
    bookingPhoneNumberCantEmpty: function () {
        return new Exception("ERR32", appConstant.ERROR_MESSAGES.BOOKING_PHONE_NUMBER_CANT_EMPTY)
    },
    availCantEdit: function () {
        return new Exception("ERR27", appConstant.ERROR_MESSAGES.AVAIL_CANT_EDIT)
    },
    availDateEmpty: function () {
        return new Exception("ERR19", appConstant.ERROR_MESSAGES.AVAIL_DATE)
    },
    overlapAvailability: function () {
        return new Exception("ERR29", appConstant.ERROR_MESSAGES.OVERLAP_AVAILABILITY, null, appConstant.TITLES.OVERLAP_AVAILABILITY_TITLE);
    },
    addAvailabilityOutsideEffectiveTime: function () {
        return new Exception("ERR30", appConstant.ERROR_MESSAGES.AVAILABILITY_OUTSIDE_EFFECTIVE_TIME, null, appConstant.TITLES.OUTSIDE_EFFECTIVE_TIME_AVAILABILITY);
    },
    sessionExpired: function (err) {
        return new Exception(appConstant.LOGOUT_ERROR_CODE, appConstant.ERROR_MESSAGES.SESSION_EXPIRED, err);
    },
    availabilityOutsideCurrentDateRange: function (err) {
        return new Exception("ERR34", appConstant.ERROR_MESSAGES.AVAILABILITY_OUTSIDE_CURRENT_DATE_RANGE);
    },
    bookingCantPlace: function () {
        return new Exception("ERR35", appConstant.ERROR_MESSAGES.BOOKING_CANT_COMPLETE);
    },
    emailNotFoundFgtPwd: function () {
        return new Exception("ERR4", appConstant.ERROR_MESSAGES.EMAIL_NOT_FOUND_FGT_PWD);
    },
    acctStatusIncomplete: function () {
        return new Exception("ERR36", appConstant.ERROR_MESSAGES.ACCT_STATUS_INCOMPLETE);
    },
    acctStatusDeclined: function () {
        return new Exception("ERR37", appConstant.ERROR_MESSAGES.ACCT_STATUS_DECLINED);
    },
    acctStatusSuspended: function () {
        return new Exception("ERR37", appConstant.ERROR_MESSAGES.ACCT_STATUS_SUSPENDED, null, appConstant.TITLES.ACCT_STATUS_SUSPENDED_TITLE);
    },
    payerStatusSuspended: function () {
        return new Exception("ERR37", appConstant.ERROR_MESSAGES.PAYER_STATUS_SUSPENDED, null, appConstant.TITLES.PAYER_SUSPENDED_TITLE);
    },
    acctStatusPendingApproval: function () {
        return new Exception("ERR38", appConstant.ERROR_MESSAGES.ACCT_STATUS_PENDING_APPROVAL, null, appConstant.TITLES.ACCT_STATUS_PENDING_APPROVAL_TITLE);
    },
    payerStatusSignUpIncomplete: function () {
        return new Exception("ERR38", appConstant.ERROR_MESSAGES.PAYER_STATUS_SIGNUP_INCOMPLETE);
    },
    bookingDateRangeFilter: function () {
        return new Exception("ERR39", appConstant.ERROR_MESSAGES.BOOKING_DATE_RANGE);
    },
    bookingNotFound: function () {
        return new Exception("ERR4", appConstant.ERROR_MESSAGES.BOOKING_NOT_FOUND);
    },
    bookingDayRangeFilter: function () {
        return new Exception("ERR39", appConstant.ERROR_MESSAGES.BOOKING_DAY_RANGE);
    },
    changePasswordError: function () {
        return new Exception("ERR40", appConstant.ERROR_MESSAGES.NEW_PWD_INCORRECT_MSG, null, appConstant.TITLES.INCORRECT_PASSWORD);
    },
    checkPaymentInfo: function () {
        return new Exception("ERR41", appConstant.ERROR_MESSAGES.CHECK_PAYMENT_INFO);
    },
    emailNotFound: function () {
        return new Exception("ERR41", appConstant.ERROR_MESSAGES.EMAIL_NOT_FOUND);
    },
    invalidBookingStatus: function () {
        return new Exception("ERR42", appConstant.ERROR_MESSAGES.INVALID_BOOKING_STATUS);
    },
    accessDenied: function () {
        return new Exception("ERR43", appConstant.ERROR_MESSAGES.ACCESS_DENIED);
    },
    invalidBookingMarkStatus: function () {
        return new Exception("ERR44", appConstant.ERROR_MESSAGES.INVALID_BOOKING_MARK_STATUS);
    },
    bookingAlreadyMarked: function () {
        return new Exception("ERR45", appConstant.ERROR_MESSAGES.BOOKING_ALREADY_MARKED);
    },
    createCustomer: function () {
        return new Exception("ERR46", appConstant.ERROR_MESSAGES.CREATE_CUSTOMER);
    },
    pastAvailability: function () {
        return new Exception("ERR47", appConstant.ERROR_MESSAGES.CANT_EDIT_PAST_AVAILABILITY);
    },
    uploadMedia: function () {
        return new Exception("ERR47", appConstant.ERROR_MESSAGES.PLEASE_UPLOAD_MEDIA);
    },
    uploadValidDocs: function (docs) {
        return new Exception("ERR48", appConstant.ERROR_MESSAGES.UPLOAD_VALID_DOCS + docs);
    },
    uploadNonAnimatedGIF: function () {
        return new Exception("ERR49", appConstant.ERROR_MESSAGES.UPLOAD_NON_ANIMATED_GIF);
    },
    passCntEmpty: function () {
        return new Exception("ERR50", appConstant.ERROR_MESSAGES.PWD_CANT_EMPTY)
    },
    wrongPwd: function () {
        return new Exception("ERR51", appConstant.ERROR_MESSAGES.WRONG_PWD_ON_LOGIN)
    },
    checkPaymentType: function () {
        return new Exception("ERR52", appConstant.ERROR_MESSAGES.CHECK_PAYMENT_TYPE);
    },
    accountUnverified: function () {
        return new Exception("ERR53", appConstant.ERROR_MESSAGES.ACCOUNT_UNVERIFIED, null, appConstant.TITLES.EMAIL_NOT_VERIFIED);
    },
    taxpayerWrngPwd: function () {
        return new Exception("ERR54", appConstant.ERROR_MESSAGES.TAXPAYER_WRONG_PWD);
    },
    taxpayerEmailNotFoundFgtPwd: function () {
        return new Exception("ERR55", appConstant.ERROR_MESSAGES.TAXPAYER_EMAIL_NOT_FOUND_FGT_PWD);
    },
    locationCannotBeDeleted: function () {
        return new Exception("ERR56", appConstant.ERROR_MESSAGES.CANNOT_DELETE_THIS_LOCATION);
    },
    bookingAlreadyReviewed : function() {
        return new Exception("ERR56", appConstant.ERROR_MESSAGES.BOOKING_ALREADY_REVIEWED);
    }
};
//========================== Export Module   End ===========================
