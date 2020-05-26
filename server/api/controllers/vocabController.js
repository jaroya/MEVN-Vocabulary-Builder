const mongoose = require('mongoose');
const Vocab = require('../models/vocabModel');


exports.list_all_words = (req,res)=>{
	Vocab.find({}, (err,words)=>{
		if(err) res.send(err)

		//res.json(words);
		res.json({
			name: "mika"
		})
	});
};

exports.create_a_word = (req, res) => {

  const newWord = new Vocab(req.body);
  
  newWord.save((err, word) => {
    if (err) res.send(err);
    res.json(word);
  });
};


