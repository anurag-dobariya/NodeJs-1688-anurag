const http = require ("http");
const express = require("express");
const config = require("./config/config");
const { connectDB } = require("./db/dbConnection");
const routes = require("./routes/v1");

app = express();

// === Create server using express === 
app.listen(8080 , () =>{
    console.log("Server is running..");
});

/** Database connection */
connectDB()

/** creating namespace for routes */
app.use("/v1", routes);

// === Create server using http === 
// const server = http.createServer(app);
// server.listen(config.port, () => {
//   console.log("server listning on 8080 port number");
// });

