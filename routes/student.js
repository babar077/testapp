var Student = require('../Models/Student');
exports.showStudents = function(req, res) {
    res.render('student.html');
};


exports.addStudents = function(req, res) {
    var data = new Student({
        firstName: 'Sultan Saadat',
        sex: 'Male',
        age: '21',
        emailAddress: 'sultansaadat@gmail.com'
    });

    data.save(function(err, doc) {
        console.log(doc);
        res.send(doc);
    });


};
exports.listAll = function(req, res) {
    // Student.findAll({

    // }, function(err, student) {
    //     console.log(student)

    // });
    Student.find({}).exec(function(err, result) {
        if (!err) {
            // handle result
        } else {
            console.log(result);
        };
    });

}
exports.getStudent = function(req, res) {
    Student.find({
        'firstName': 'babar'
    }, function(err, student) {
        console.log(student)
    })
}