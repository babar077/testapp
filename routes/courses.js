var Courses = require('../Models/Courses');
exports.showCourses = function(req, res) {
    res.render('courses.html');
};
exports.addCourses = function(req, res) {
    var record = new Courses({
        coursesName: 'computer',
        type: 'science',
        startDate: '21-12-2014',

    });
       record.save(function(err, doc) {
        console.log(doc);
        res.send(doc);
    });

};
exports.listAll = function(req, res) {
    Courses.find({

    }, function(err, courses) {
        console.log(courses)

    });

}
exports.getCourses = function(req, res) {
    Courses.find({
    }, function(err, courses) {
        console.log(courses)
    })
}







