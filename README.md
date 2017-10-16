# express-middleware-log [![NPM version](https://badge.fury.io/js/express-middleware-log.svg)](http://badge.fury.io/js/express-middleware-log)

### Install

    npm install --save express-middleware-log
    

### Usage
    
    const logger = require("express-middleware-log"); // Include express-middleware-log in your application
    
    app.use(logger("Before Middleware 1")); // Print "Before Middleware 1" at this point
    app.use(logger(req => req.path)); // Print req.path at this point
