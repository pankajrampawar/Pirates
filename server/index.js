const express = require('express');
const connectDB = require('./db')
const cors = require('cors');
const userRoute = require('./routes/UserRoutes');
const craftRoute = require('./routes/CraftRoutes');
const responseRoute = require('./routes/ResponseRoutes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const port = 3000;

const app = express();

const corsOption = {
    origin: 'https://pirates-ten.vercel.app',

    credentials: true
}
app.use(cors(corsOption)); 

app.use(bodyParser.json())

app.use(cookieParser())

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