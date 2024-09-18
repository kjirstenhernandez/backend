const data = require("../db/dbConnect")

const getInfo = async (req, res, next) => {
    console.log("controller test")
    const client = await data.dbConnection();
    const db = client.db("testing");
    const userList = await db.collection("users").find().toArray();
    console.log(userList)
    if (userList) {
        userList.toArray().then((list) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(list[0])
        } )
    } else {
        console.log("No users")
    }
}

module.exports = { getInfo }

