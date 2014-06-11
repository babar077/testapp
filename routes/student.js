// exports.showStudents=function(req,res){

// 	res.render('Students');
	
// }
exports.showStudents = function(req, res) {
    models.Subjects.find({
        where: {
            id:id
        }
    }).complete(function(err, _user) {
        if (err)
            res.send(err)
        else {
            console.log(_user);
            res.render("studentView.html", {
                id:id,
                username: req.session.currUsername,
                avatar: req.session.userAvatar

            });
        }
    });
}