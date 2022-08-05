const express = require("express");
const envData = require("./config");
const router = require("./routes");
const bodyparser = require("body-parser");
const db = require("./db");
const cors = require("cors");
const path = require("path");
const cookiesParser = require("cookie-parser");

const { logErrors, boomErrorHandler, errorHandler, ormErrorHandler } = require("./middlewares/error.handler");

const app = express();

app.use( cors() );
app.use( cookiesParser( envData.COOKIE_KEY) );

app.use( bodyparser.json() );

app.use(
    express.static(
        path.resolve(__dirname, './../public')
    )
);

app.listen(envData.PORT, async () => {
    console.log("Listening at " + envData.PORT);

    await db.init();

    app.use( router );
    app.use( logErrors );
    app.use( boomErrorHandler );
    app.use( ormErrorHandler );
    app.use( errorHandler );

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
    });
});



