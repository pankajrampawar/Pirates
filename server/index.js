const express = require('express');
const connnectDB = require('../db')
const craftRoute = require('./routes/CraftRoutes');
const responseRoute = require('./routes/ResponseRoutes');
const port = 8080;

app.get('/', (req, res) => {
    res.send("started")
});

app.use('/craft', craftRoute)
app.use('/response', responseRoute)

app.lisetn(port, ()=>{
    console.log(`Listening on port ${port}`);
})