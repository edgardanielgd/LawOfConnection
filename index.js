const express = require("express");
const envData = require("./config");
const router = require("./routes");
const bodyparser = require("body-parser");
const db = require("./db");

const { logErrors, boomErrorHandler, errorHandler, ormErrorHandler } = require("./middlewares/error.handler");

const app = express();

app.use( bodyparser.json() );

app.listen(envData.PORT, async () => {
    console.log("Listening at " + envData.PORT);

    await db.init();

    app.use( router );
    app.use( logErrors );
    app.use( boomErrorHandler );
    app.use( ormErrorHandler );
    app.use( errorHandler );
    
});

