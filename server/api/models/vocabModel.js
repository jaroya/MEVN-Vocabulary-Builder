const mongoose = require('mongoose');

const {Schema} = mongoose;

const vocabSchema = Schema({
	english:{
		type: String,
		required: 'English field cannot be blank'
	},

	german:{
		type: String,
		required: 'German field cannot be blank'
	}
},

{collection: 'vocab'}

);


module.exports = mongoose.model('Vocab', vocabSchema);