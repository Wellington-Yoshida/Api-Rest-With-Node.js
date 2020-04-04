const port = 3000;
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.listen(port, () => {
    console.log(`BACKEND is running on port: ${port}.`);
});

module.exports = app;

