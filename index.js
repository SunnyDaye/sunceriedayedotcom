const express = require('express');
const app = express();
require('dotenv').config();

const { PORT } = process.env;

 app.use(express.static('webpage'));

 app.get('/', (req,res) => {
    res.send('index');
 });

 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
 });