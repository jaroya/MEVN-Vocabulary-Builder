const Vocab = require('../models/vocabModel');


exports.list_all_words = (req,res,next)=>{

	Vocab.find({}, (err,words)=>{

		if(err) res.send(err)

		res.json(words);
	});
};

exports.create_a_word = (req, res,next) => {

  const newWord = new Vocab(req.body);
  
  newWord.save((err, word) => {
    if (err) res.send(err);
    res.json(word);
  });
};



exports.read_a_word = (req, res,next) => {
  Vocab.findById(req.params.wordId, (err, word) => {
    if (err) res.send(err);
    res.json(word);
  });
};


exports.update_a_word = (req, res,next) => {
  Vocab.findOneAndUpdate(
    { _id: req.params.wordId },
    req.body,
    { new: true },
    (err, word) => {
      if (err) res.send(err);
      res.json(word);
    }
  );
};

exports.delete_a_word = (req, res, next) => {
  Vocab.deleteOne({ _id: req.params.wordId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'Word successfully deleted',
     _id: req.params.wordId
    });
  });
};


