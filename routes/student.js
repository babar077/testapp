exports.showStudents=function(req,res){
res.render('student.html');
	}
var Student = mongoose.model('Student', studentSchema);
 var Data = new Student({
     firstName: 'data',
     sex: 'male',
     age: 23

 });
  Data.save(function(err) {
     if (err) console.log('Error on save!')
 });
         




   