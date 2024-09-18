const MongoClient  = require('mongodb').MongoClient;
const env = require("dotenv").config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri)

const dbConnection = async () => {
    try{
        await client.connect(uri);
        console.log("DB connected");
    } catch {
        console.error(e);
    }
}



module.exports = { dbConnection }