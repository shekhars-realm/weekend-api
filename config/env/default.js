"use strict";

const path = require("path");

//========================== Class Definitions Start =====================

class DefaultConfig {
    constructor() {
        this.TAG = "local";
        this.isProd = false;
        // Server port
        this.appPort = 5020;
        // Server IP
        this.hostIP = '127.0.0.1';
        this.hostName = 'localhost';
        this.s3 = {
            maxAsyncS3: 20,     // this is the default
            s3RetryCount: 3,    // this is the default
            s3RetryDelay: 1000, // this is the default
            multipartUploadThreshold: 20971520, // this is the default (20 MB)
            multipartUploadSize: 15728640, // this is the default (15 MB)
            bucketName: "",
            publicBucketName: "revel",
            ACL: 'public-read',
            accessKeyId: "",
            secretAccessKey: "",
            region: "us-west-2"
        };
        this.IMAGE_BASE_URL = "http://localhost/revel/images/";
        //this.WEBSITE_SHARE_LINK =  "http://dev.algoworks.com/quax-html";
        this.DOCS_BASE_URL = "http://localhost:5020/revel/docs/";
        this.CSV_BASE_URL = "http://localhost:5020/revel/csv/";
    }

    getConfigs() {
        return this;
    }
}

//========================== Class Definitions End =====================


//========================== Export module start =======================

module.exports = DefaultConfig;

//========================== Export module end =========================
