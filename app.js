var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const config = require("./config");

var index = require('./routes/index');

let apiRoutesProyectos = require("./routes/api/proyectos")(app, express);
let apiRoutesHyE = require("./routes/api/herramientasYEquipos")(app, express);
let apiRoutesMateriales = require("./routes/api/materiales")(app, express);
let apiRoutesMO = require("./routes/api/trabajadores")(app, express);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Conexión a la base de datos
mongoose.connect(config.database);

app.use('/', index);
app.use("/proyectos", apiRoutesProyectos);
app.use("/hye", apiRoutesHyE);
app.use("/materiales", apiRoutesMateriales);
app.use("/mo", apiRoutesMO);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
