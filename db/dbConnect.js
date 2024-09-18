const { MongoClient } = require('mongodb');

async function dbConnection() {
    const env = require("dotenv").config()
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);
    

    try{
        await client.connect();
    } catch {
        console.error(e);
    } finally {
        await client.close;
    }
}



module.exports = { dbConnection }