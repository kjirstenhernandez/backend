const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const routes = require("./routers/index")

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
})

app.use('/professional', routes);

app.listen(port);
console.log("WebServices listening on port: " + port);

