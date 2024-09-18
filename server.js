const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const routes = require("./routers/index")

app.use('/professional', require(routes))

app.listen(port);
console.log("WebServices listening on port: " + port);

