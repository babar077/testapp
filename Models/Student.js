 var mongoose = require('../connection/connection.js');

 var studentSchema = new mongoose.Schema({
     firstName: {
         type: 'String'
     },
     sex: {
         type: 'String'
     },
     age: {
         type: 'String'
     },
     emailAddress: {
         type: 'String'
     }
   
 });

 var Student = mongoose.model('Student', studentSchema);
 module.exports = Student;