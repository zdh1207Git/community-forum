var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const {
  notFound,
  errorHandler
} = require('./middlewares/');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// our routes go here...

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Community API! 🌈 ♥',
  })
})
app.use(notFound);
app.use(errorHandler);

module.exports = app;