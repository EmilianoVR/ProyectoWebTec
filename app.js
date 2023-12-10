const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.use('/login', require('./login'));
app.use('/dashboard', require('./dashboard'));
app.use('/tasks', require('./tasks'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
