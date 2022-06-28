const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
//sequelize error-handler
const { ValidationError } = require("sequelize");

//check if the environment is in production or not
const { environment } = require('./config');
const isProduction = environment === 'production';

const routes = require('./routes');

//iniitalize the express application
const app = express();
//Connect the morgan middleware for logging information about requests and responses
app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//to avoid entity. parse failed
// app.use(require('body-parser').json());
// app.use(require('body-parser').urlencoded({ extended: true }));

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin"
    })
);

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);

//connect all the routes
app.use(routes);

//Resource Not Found Error-Handler
// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);
});

//Resource Not Found Error-Handler
// Process sequelize errors
app.use((err, _req, _res, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => e.message);
        err.title = 'Validation error';
    }
    next(err);
});

//Error Formatter Error-Handler
app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack
    });
});

module.exports = app;