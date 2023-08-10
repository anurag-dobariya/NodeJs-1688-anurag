const http = require ("http");
const express = require("express");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes");
const config = require("./config/config");

const app = express();

/** create server using express */
app.listen(8080 , function(){
    console.log("server is running");
});

/** Database connection */
connectDB()

/** creating namespace for routes */
app.use("/v1", routes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});