
var express = require('express');
var router = express.Router();
var feedback = require('../models/feedback.js').feedback;
var mongoose = require('mongoose');

/* GET sortir */
router.get('/', function(req, res, next) {
    res.render('sortir', {});
});

router.post('/', function(req, res, next) 
{
	var current = new feedback({});
	current.nomEta = req.body.nomEta;
	current.note = req.body.note;
	current.commentaire = req.body.commentaire;
	current.pseudo = req.body.pseudo;

	current.save(function(err, sortir) 
	{
		if(err) console.log('error');
		else console.log("Création du feedback réussie" + sortir);
		res.redirect('/sortir');
	});
});

module.exports = router;