'use strict';

// Import bunyan logger
var bunyan = require('bunyan'),
    _ = require('lodash');

var logger,
    streams;

var initialize = _.once(function() {
    if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV) {
        var bunyanDebugStream = require('bunyan-debug-stream');
        streams = [
            {
                level: 'error',
                type: 'raw',
                stream: bunyanDebugStream({
                    basepath: __dirname + '/..' // this should be the root folder of your project.
                })
            },
            {
                level: 'warn',
                type: 'raw',
                stream: bunyanDebugStream({
                    basepath: __dirname + '/..' // this should be the root folder of your project.
                })
            }
        ]
    } else {
        streams = [
            {
                level: 'error',
                path: 'app.log'
            },
            {
                level: 'warn',
                path: 'app.log'
            },
            {
                level: 'info',
                path: 'app.log'
            }
        ];
    }

    logger = bunyan.createLogger({
        name : "quaxLog",
        streams : streams,
        serializers : {
            req : bunyan.stdSerializers.req,
            res : bunyan.stdSerializers.res,
            err : bunyan.stdSerializers.err
        }
    });
});

initialize();

module.exports = logger;
