var Person = require("../models/persona.js");

module.exports.getData = function(req, res) {
		Person.find({}, function(err, people){
			if (err) {
				return res.status(500).send("error: " + err);
			}
			res.json({data: people})
		});
}

module.exports.putData = function(req, res) {
	var person = new Person(req.body);
	person.save(function(err, people){
		if (err) {
			return res.status(500).send("error: " + err);
		}
		res.status(200).send("post ok")
	});
}

/*module.exports.delData = function(req, res) {
	var name = req.params.firstName;
	console.log("eliminando " + name);
	Person.findOneAndRemove({firstName: name} , function(err){
		if (err) {
			return res.status(500).send("error: " + err);
		}
		res.status(200).send("delete ok")
	});	
}*/
module.exports.delData = function(req, res) {
	var name = req.params.firstName;
	console.log("eliminando " + name);
	Person.findOne({firstName: name} , function(err, persona){
		if (err) {
			return res.status(500).send("error: " + err);
		}
		if (persona) {
			persona.remove(function(err){
				if (err) {
					return res.status(500).send("error en remove: " + err);
				}
				res.status(200).send("delete ok")
			});
		} else {
			return res.status(500).send("persona no encontrada: " + err);
		}
	});	
}