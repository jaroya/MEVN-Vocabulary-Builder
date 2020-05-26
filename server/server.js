
const express = require('express');
const vocabRouter = require('./api/routes/vocabRoutes');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');



const app = express();
app.use(helmet())

//@desc MongoDB connection 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vocab-builder', {useNewUrlParser: true, useUnifiedTopology: true});

//@desc MongoDB Error Handling
const db = mongoose.connection;
db.on('error', ()=>{
	console.log("Cannot connect to db");
});

db.on('open', ()=>{
	console.log('Connected to db successfully');
})

//@desc MiddleWare
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//@desc routes handling

app.get('/',(req,res)=>{
	res.json({
		message: "success"
	})
})


app.use('/words', vocabRouter);



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
	console.log(`App listening on port ${port}`);
})