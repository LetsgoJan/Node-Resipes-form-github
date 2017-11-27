const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('');

app.use(bodyParser.json());
routes(app);


app.post('/api');
app.put('/api');
app.delete('/api');

module.exports = app;