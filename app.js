var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require("jsonwebtoken");

var app = express();
var secureRoutes = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/auth', secureRoutes);

var config = require("./config/config.js");
config.setConfig();
mongoose.connect(process.env.MCON);
var controllerP = require("./controllers/ctlPerson.js");
var controllerA = require("./controllers/ctlAuth.js");

//validacion middleware
secureRoutes.use(function(req, res, next){
	var token = req.body.token || req.headers['token'];
	if (token) {
		jwt.verify(token, process.env.SECRET_KEY, function(err, decode){
			if (err) {
				res.status(500).send("Invalid token");
			} else {
				next();
			}
		});
	} else {
		res.send("envie token");
	}
});

secureRoutes.post("/p", controllerP.putData);
secureRoutes.get("/d/:firstName", controllerP.delData);
secureRoutes.get("/g", controllerP.getData);//app.get("/a/g", function(req, res){ res.json({data: data});});
app.get("/a/a", controllerA.authenticate);
app.get("/", function(req, res){console.log("peticion /");res.send("peticion / ok");});

app.listen(8888);
console.log("port: 8888");
