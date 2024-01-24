const express = require('express');
const connnectDB = require('../db')
const port = 8080;

app.get('/', (req, res) => {
    res.send("started")
});

app.lisetn(port, ()=>{
    console.log(`Listening on port ${port}`);
})