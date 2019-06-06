"use strict";

//===============================Load Modules Start========================

const express = require("express"),
    bodyParser = require("body-parser"),//parses information from POST
    methodOverride = require('method-override');//used to manipulate POST
const helmet = require('helmet');

module.exports = function (app, env) {
    app.use(helmet());
    // parses application/json bodies
    app.use(bodyParser.json({ limit: '10mb'}));
    // parses application/x-www-form-urlencoded bodies
    // use queryString lib to parse urlencoded bodies
    app.use(bodyParser.urlencoded({ limit: '10mb',extended: false}));
    app.use('/pdf', express.static(app.locals.rootDir + "/pdf/"));
    app.use(methodOverride(function(req, res){
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            var method = req.body._method;
            delete req.body._method;
            return method
        }
    }));
    /**
     * add swagger to our project
     */
    app.use('/apiDocs', express.static(app.locals.rootDir + '/public/dist'));
    app.use('/images', express.static(app.locals.rootDir + "/uploads/"));
    app.use('/docs', express.static(app.locals.rootDir + "/uploads/"));
    app.use('/csv', express.static(app.locals.rootDir + "/csv/"));
    /**
     *enable Cross origin resource sharing
     */
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization, x-custom-token , X-XSRF-TOKEN");
        res.header('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
        next();
    })
};
