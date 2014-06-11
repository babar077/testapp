var studentSchema =  new mongoose.Schema({
  attributes: {
    firstName: 'STRING',
    sex:'STRING'
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

module.exports = Student;