const http = require ("http");
const express = require("express");

const app = express();

app.listen(8080 , function(){
    console.log("server is running");
});
