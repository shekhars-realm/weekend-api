//========================== Load Modules Start ==============================

//Load routers
const  userRouter = require("../API/User/routes");

const responseHandler = require('../applibrary/responsehandler');
const routePrefix = require("../applibrary/appconstants").ROUTE_PREFIX;

//========================== Load Modules End ================================

//========================== Export Module Start =============================

module.exports = function (app) {
    // Attach routes
    app.use(routePrefix + 'user/api/v1', userRouter);
    // Attach ErrorHandler to Handle All Errors
    app.use(responseHandler.hndlError);
};
