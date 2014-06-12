 var mongoose = require('..connection/connection.js');
 var studentSchema = new mongoose.Schema({
    firstName: {
        type: 'String'
    }
     // firstName: 'STRING',
     // sex: 'STRING'
     // age: {
     //     type: 'INTEGER',
     //     max: 150,
     //     required: true
     // }

     // emailAddress: {
     //     type: 'email',
     //     required: true
     // }
 });

 var Student = mongoose.model('Student', studentSchema);
 module.exports = Student;
