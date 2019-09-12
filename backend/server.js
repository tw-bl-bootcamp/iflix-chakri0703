const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());
app.use(expressValidator());
const route = require('../backend/routes/route')
app.use('/', route)
//connecting to mongo
const dbConfig = require('../backend/Config/dbConfig');


const port = 3000
var server = app.listen(3000, () => {
    console.log("Server is up at ", port);
})
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DataBase Connected Sucessfully");
}).catch(err => {
    console.log("failed to connect DataBase ", err);
    process.exit();
})
mongoose.set('useCreateIndex', true);
module.exports = server
