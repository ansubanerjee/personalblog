
//IMPORTS
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require("morgan");
const errorHandler = require("./helpers/error-handler");
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

//SCHEMA
const Post = require('./models/post');

//GENERAL
require('dotenv/config');
app.use(cors());
app.use(express.json());


const api = process.env.API_URL;
const postsRouter = require('./routes/posts');



//MIDDLEWARE
app.use(morgan('tiny'));
app.use(errorHandler);

//ROUTERS

app.use(`${api}/posts`, postsRouter);




const db_url = process.env.db_url;
const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

mongoose.connect(db_url, connectionParams).then(()=>{
    console.log("Connected to the DB")
}).catch((e)=>{
    console.log("Error: ", e)
});

app.listen(3000, ()=>{
    console.log(api);
    console.log("Running at http://localhost:3000");
})