'use strict';

//============================= Load Modules Start ============================

//============================= Load external modules =========================


//============================= Load internal modules =========================

//const environment =  process.env.NODE_ENV || 'dev';
const environment =  'dev';

//============================= Load Modules End ==============================

const env = (() => {
    let config;
    switch (environment) {
        case 'staging':
        case 'stag':
            let DevConfig = require('./staging');
            config = new DevConfig();
            break;
        case 'prod':
        case 'production':
            let ProdConfig = require('./production');
            config = new ProdConfig();
            break;
        default:
            let DefaultConfig = require('./development');
            config = new DefaultConfig();
    }

    return config.getConfigs();
})();

module.exports = env;
