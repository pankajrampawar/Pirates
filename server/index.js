const express = require('express');
const app = express();
const connectDB = require('./db')
const craftRoute = require('./routes/CraftRoutes');
const responseRoute = require('./routes/ResponseRoutes');
const bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("started")
});

connectDB();

app.use('/craft', craftRoute)
app.use('/response', responseRoute)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})