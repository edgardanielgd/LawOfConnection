const Service = require("./services/DatabaseService");
const express = require("express");
const envData = require("./config");
const router = require("./routes");
const bodyparser = require("body-parser");
const { errorHandler } = require("./middlewares/error.handler");
const app = express();

app.use( bodyparser.json() );

app.listen(envData.PORT, () => {
    console.log("Listening at " + envData.PORT);
    const service = new Service();
    service.init();
});

app.use( router );
app.use( errorHandler );