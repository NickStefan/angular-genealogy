//// DEFINE EXPRESS REQUEST HANDLING

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');

var app = express();

// view engine setup
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'expressviews'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'dist')));
} else {
  app.use(express.static(path.join(__dirname, 'dev')));
}

/* GET home page. */
app.get('/', function(req, res) {
  res.render('index', { 
    cache: false, 
    title: 'Angular-Genealogy',
    environment: process.env.NODE_ENV 
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            cache: false,
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        cache: false,
        message: err.message,
        error: {}
    });
});

//// INIT EXPRESS SERVER

var debug = require('debug')('angular-genealogy');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

if (process.env.NODE_ENV === 'production') {
  console.log('port', process.env.PORT);
  console.log('environment', process.env.NODE_ENV);
} else {
  console.log('port', 3000);
  console.log('environment', 'development');
}
