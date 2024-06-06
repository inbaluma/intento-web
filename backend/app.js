const express = require('express');

const app = express();

app.use((req, res) => {
    res.end("Hola a todo el mundo");
})

module.exports = app;