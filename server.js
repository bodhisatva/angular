var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routerInfo = require('./app/router/main');
var consolidate = require('consolidate');
var configuration = require('./app/configuration/appinformation');
var swig = require('swig');
var app = express();

//Configuration file for all information
app.locals.title = configuration.appinformation.title;
app.locals.description = configuration.appinformation.description;
app.locals.keywords = configuration.appinformation.keywords;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routerInfo);

app.engine('html', consolidate.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'app/views'));
app.set('port', process.env.PORT || 3000);
app.set('view cache', false);//disable caching in development enviroment
swig.setDefaults({ //disable caching in development enviroment
  cache: false
});

app.listen(app.get('port'), function() {
  console.log('Server started, ready on port: ' + app.get('port'));
});
