 var mongoose = require('../connection/connection.js');
 var coursesSchema = new mongoose.Schema({
     coursesName: {
         type: 'String'
     },
     type: {
         type: 'String'
     },
     startDate: {
         type: 'String'
     },
 });
 var Courses = mongoose.model('Courses', coursesSchema);
 module.exports = Courses;
