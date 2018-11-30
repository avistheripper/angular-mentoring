const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.send('Test');
});

const port = process.env.PORT || 6969;


app.listen(port, () => console.log(`Mock is running at ${port}`));