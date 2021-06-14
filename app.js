const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'});
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;


//import router file
const itemRouter = require('./routes/item');

//Mount route file
app.use('/item', itemRouter)
;
app.listen(PORT, () => {
    console.log( `Express started on http://localhost:${PORT} in ${process.env.NODE_ENV} mode`);
});