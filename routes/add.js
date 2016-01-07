var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

function addPoll(req, res) {
	console.log("addPoll");
	mongo.connect('mongodb://localhost:27017/poll', function(err, db) {

		assert.equal(null, err);

		console.log("Successfully connected to MongoDB.");		

		db.collection('subject').insertOne({
			'subject': req.body.subject,
			'desc': req.body.desc
		}, function(err, result) {
			//assert.equal(err, null);
			if (null != err) {
				console.log("Error: " + err);
			} else {
				res.render('add.ejs', { "message": "New poll added: " + req.body.subject } );
			}
		});

	});
}

router.get('/', function(req, res, next) {
  res.render('add.ejs', {"message": ""});
});

router.post('/', function(req, res, next) {
	//console.log("Request:" + JSON.stringify(req.body));

	if (!req.body.subject || !req.body.desc) {
		res.render('add.ejs', { "message": "Invalid input, try again." + req.body.subject } );
	} else {
		addPoll(req, res);
	}
});

module.exports = router;
