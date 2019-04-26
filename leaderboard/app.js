// Require dependencies ====================================

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
const User = require('./models/user');
// const Week = require('./models/weeks');

// Require Routes ==========================================

const indexRoutes = require('./routes/index');
const adminRoutes = require('./routes/admin');
const weeksRoutes = require('./routes/weeks');

const app = express();

// Connect with the database ===============================
mongoose.connect('mongodb://localhost:27017/leaderboard', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('Connected to the database!');
});

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

// view engine setup =======================================

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// Configure Passport and Sessions =========================

app.use(
  session({
    secret: 'LEARN & EARN leaderboard',
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// define locals

app.use(function(req, res, next) {
  // always logged in
  req.user = {
    username: 'lucas',
    isAdmin: true
  };
  // user authentication
  res.locals.currentUser = req.user;
  // set flash messages
  res.locals.success = req.session.success || '';
  delete req.session.success;
  res.locals.error = req.session.error || '';
  delete req.session.error;
  // continue on to next function
  next();
});

// Mount Routes ============================================

app.use('/', indexRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/weeks', weeksRoutes);

// catch 404 and forward to error handler ==================

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler ===========================================

app.use((err, req, res, next) => {
  console.log(err);
  req.session.success = err;
  res.redirect('back');
});

module.exports = app;
