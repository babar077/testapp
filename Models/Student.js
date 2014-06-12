 var mongoose = require('..connection/connection.js');
  var studentSchema = new mongoose.Schema({
     attributes: {
         firstName: 'STRING',
         sex: 'STRING'
         age: {
             type: 'INTEGER',
             max: 150,
             required: true
         }

         emailAddress: {
             type: 'email',
             required: true
         }
     }
 });
 var Student = mongoose.model('Student', studentSchema);

 module.exports = Student;


 // var Data = new Student({
 //     firstName: 'data',
 //     sex: 'male',
 //     age: 23

 // });
 // Data.save(function(err) {
 //     if (err) console.log('Error on save!')
 // });


//  Student.find({}).exec(function(err, result) {
//   if (!err) {
//     // handle result
//   } else {
//     // error handling
//   };
// });


 // module.exports = Student;