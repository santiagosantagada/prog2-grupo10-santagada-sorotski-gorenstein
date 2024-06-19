var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session")
const datos = require("./database/models")



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productosRouter =require("./routes/productos")


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( { secret: "Nuestro mensaje secreto",
				resave: false,
				saveUninitialized: true }));

app.use(function(req, res, next) {
  if (req.session.user != undefined) {
    //res.send(req.session.user)
    res.locals.user = req.session.user
    //res.send(res.locals.user)
  }
  return next();
});

// app.use(function(req, res, next) {
//   if (req.session.profile != undefined) {
//     res.locals.register = req.session.profile
//       }
//   return next();
// });

app.use(function(req, res, next) {
  
  if (req.cookies.userId != undefined && req.session.user == undefined) {
    let idUsuario = req.cookies.userId; 

    datos.Usuario.findByPk(idUsuario)
    .then((result) => {
      req.session.user = result;
      res.locals.user = result;
      return next();
    }).catch((err) => {
      return console.log(err);
    });
  } else {
    return next();
  }
})      

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/product", productosRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
