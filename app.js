const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Successfully connected to PORT 3000');
});