'use strict';

const express = require('express');
const app = express();
const port = 3000;
const jsonParser = require('body-parser').json;
const routes = require('./routes/routes');

// middleware
app.use(jsonParser());
app.use('/api/v0', routes);

// listening port
app.listen(port, () => {
    console.log(`Lifeway API listening at http://127.0.0.1:${port}`)
})

module.exports = app;
