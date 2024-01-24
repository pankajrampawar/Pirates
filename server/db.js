const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        const password = process.env.DB_PASSWORD

        await mongoose.connect(`mongodb+srv://pankajpawars123:${password}@cluster0.bljuba9.mongodb.net/`)
        console.log("Connected to MongoDB");
        
    } catch (error) {
        console.log('mongoDB connection failed', error);
        process.exit(1);
    }
}

module.exports = connectDB;