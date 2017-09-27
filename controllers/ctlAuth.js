var jwt = require("jsonwebtoken");

module.exports.authenticate = function(req, res) {
	var user  = {
		username: 'test',
		email: 'hola@gmail.com'
	};
	var token = jwt.sign(user, process.env.SECRET_KEY, {
		expiresIn: 60
	});
	res.json({
		success: true,
		toekn: token
	});
}