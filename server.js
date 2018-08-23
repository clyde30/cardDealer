const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const port = 5500;

app.listen(port, () => {
    console.log("Listening on port " + port);
});