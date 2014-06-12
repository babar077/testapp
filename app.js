/**
 * Module dependencies.
 */
var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var routes = require('./routes/index');
var users = require('./routes/users');
var student = require('./routes/student');
var courses = require('./routes/courses');
var app = express();
var cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.get('/student', student.showStudents);
app.get('/student', student.addStudents);
// app.get('/courses', courses.showCourses);
// app.post('/courses', courses.addCourses)

app.listen(4000, function() {
    console.log('message:"Server is live and Ready" ')
});
