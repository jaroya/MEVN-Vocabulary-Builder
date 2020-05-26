const express = require('express');
const router = express.Router();

const {list_all_words, create_a_word, read_a_word, update_a_word, delete_a_word} = require('../controllers/vocabController');

router.route('/').get(list_all_words)
				.post(create_a_word);

router.route('/:wordId').get(read_a_word)
					.put(update_a_word)
					.delete(delete_a_word);


module.exports = router;
				