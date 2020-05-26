const express = require('express');
const router = express.Router();

const {list_all_words, create_a_word} = require('../controllers/vocabController');

router.route('/').get(list_all_words)
				.post(create_a_word)


module.exports = router;
				