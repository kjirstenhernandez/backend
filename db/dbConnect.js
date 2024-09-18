const { MongoClient } = require('mongodb')
const env = require("dotenv").config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri)

const dbConnection = async () => {
    try{
        await client.connect();
        const databasesList = await client.db("Testing").collection("Users").find();
        return databasesList
    } catch {
        console.error(e);
    }
}

module.exports = { dbConnection }