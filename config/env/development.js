'use strict';

//========================== Load Modules Start ==========================

//========================== Load Internal Modules =======================

const DefaultConfig = require("./default");

//========================== Load Modules End ============================

//========================== Class Definitions Start =====================

class DevConfig extends DefaultConfig {
    constructor() {
        super();
        // override dev property
        this.TAG = "development";
        this.isProd = false;
      //  this.hostIP = '52.41.4.104';
      //  this.hostName = 'dev.algoworks.com';
      this.hostIP = '127.0.0.1';
      this.hostName = 'localhost';
      //  this.WEB_SITE_LINK = "http://dev.algoworks.com/quax-html/tpl/";
        // MongoDB connection options
        this.mongoDb = {
            dbUrl: "mongodb://localhost:27017/",
            dbName: "revel",
            options: {
                user: "revel", pass: "revel",
                keepAlive: 1,
                connectTimeoutMS: 30000,
                useNewUrlParser: true
            }
        };
        this.redisDb = {
            redisDBIndex: 0,
            port: 6379,
            host: "127.0.0.1"
        };
        this.s3 = {
            maxAsyncS3: 20,     // this is the default
            s3RetryCount: 3,    // this is the default
            s3RetryDelay: 1000, // this is the default
            multipartUploadThreshold: 20971520, // this is the default (20 MB)
            multipartUploadSize: 15728640, // this is the default (15 MB)
            bucketName: "",
            publicBucketName: "quax",
            ACL: 'public-read',
            accessKeyId: "",
            secretAccessKey: "",
            region: "us-west-2"
        };
        this.stripe = {
          secretKey: "sk_test_La2n89eYVjNASM3yo97ZUxwg"
        };
        this.IMAGE_BASE_URL = "http://dev.algoworks.com/quax-api/images/";
        this.DOCS_BASE_URL = "http://dev.algoworks.com/quax-api/docs/";
        this.WEBSITE_SHARE_LINK = "http://dev.algoworks.com/quax-html";
        this.CSV_BASE_URL = "http://dev.algoworks.com/quax-api/csv/";
        this.viewAcctProfile = "http://dev.algoworks.com/quax-cms/#/acntntDetail/";
        this.ADMIN_CREATE_NEW_PWD = "http://dev.algoworks.com/quax-cms/#/changePass?token=";
        this.ACCOUNTANT_LOGIN_LINK = "http://dev.algoworks.com/quax-web/login";
        this.ACCOUNTANT_FORGOT_PASSWORD = "http://dev.algoworks.com/quax-web/changePassword/";
        this.ACCOUNTANT_CREATE_PASSWORD = "http://dev.algoworks.com/quax-web/changePassword/";
        this.TAXPAYER_CREATE_PASSWORD = "http://dev.algoworks.com/quax-web/taxpayerResetPassword?token=";
        this.ACCT_DASHBOARD = "http://dev.algoworks.com/quax-web/dashboard/";
        this.BOOKING_DETAIL_FOR_ADMIN = "http://dev.algoworks.com/quax-cms/#/bookingDetail/";
        this.APP_ICON = "https://quax-images.s3.amazonaws.com/53fa94e63c913f52e21f3e2d080f36d0.png";
        this.BOOKING_DETAIL_FOR_ACCT = "http://dev.algoworks.com/quax-cms/#/bookingDetail/";
        this.TERMS_CONDITIONS = "http://dev.algoworks.com/quax-web/terms-conditions";
        this.BOOKING_DETAILS_FOR_ACCT = "http://dev.algoworks.com/quax-web/bookings/";
        this.PDF_BASE_URL = "http://dev.algoworks.com/quax-api/pdf/";
        this.ADMIN_RESET_PWD = "http://dev.algoworks.com/quax-cms/#/resetPass?token=";
        this.ACCT_RESET_PWD = "http://dev.algoworks.com/quax-web/reset/";
        this.TAX_PAYER_RESET_PWD = "http://dev.algoworks.com/quax-web/taxpayerResetPassword?token=";
        this.VIEW_ALL_REVIEW = "http://dev.algoworks.com/quax-web/allReview";
        this.ADMIN_LINK_EXPIRED = "http://dev.algoworks.com/quax-cms/#/expire";
        this.LINK_EXPIRED = "http://dev.algoworks.com/quax/admin/api/v1/linkexpire?token=";
        this.QUAX_IMAGE = "https://quax-images.s3.amazonaws.com/1ec369dbb120aaf70e3161f82469ab0c.jpg";
        this.CANCELLATION_POLICY = "http://dev.algoworks.com/quax-web/cancellationPolicy";
        this.CALENDAR = "http://dev.algoworks.com/quax-web/calendar";
    }
}

//========================== Class Definitions End =======================


module.exports = DevConfig;
