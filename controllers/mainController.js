const data = require("../db/dbConnect")

const getInfo = async (req, res, next) => {
    console.log("controller test")
    const client = await data.dbConnection();
    if (client) {
        client.toArray().then((list) => {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(list[0])
        } )
    } else {
        console.log("No users")
    }
}

module.exports = { getInfo }

