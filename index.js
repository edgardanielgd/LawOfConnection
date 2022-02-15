const Service = require("./services/DatabaseService");
const express = require("express");
const envData = require("./config");
const app = express();

app.listen(envData.PORT, () => {
    console.log("Listening at " + envData.PORT);
    const service = new Service();
    service.init();
})
