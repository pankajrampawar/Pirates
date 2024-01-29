const express = require('express');
const connectDB = require('./db')
const cors = require('cors');
const userRoute = require('./routes/UserRoutes');
const craftRoute = require('./routes/CraftRoutes');
const responseRoute = require('./routes/ResponseRoutes');
const bodyParser = require('body-parser');
const port = process.env.PORT ||  8080;

const app = express();
app.use(cors()); 

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("started")
});

connectDB();

app.use('/craft', craftRoute)
app.use('/response', responseRoute)
app.use('/user', userRoute)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})