const data = require("../db/dbConnect")



const getInfo = async (req, res, next) => {
    console.log("this is tough");
    
    const userList = await data.db("testing").admin().collection("users").find();
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

module.exports = {getInfo}

