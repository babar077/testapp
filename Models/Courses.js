 var mongoose = require('mongoose');
  var db = mongoose.connect('mongodb://localhost/test');


var coursesSchema = new mongoose.Schema({
  attributes: {
    courseName:'STRING',
    type:'String',
    startDate:'DATE'
 }
});
var Courses = mongoose.model('Courses', coursesSchema);
var English = new Student({
     courseName: 'play',
     type: 'abc',
     startDate:'12-12-2014'

 });
 English.save(function(err) {
     if (err) console.log('Error on save!')
 });



// module.exports = Subjects;