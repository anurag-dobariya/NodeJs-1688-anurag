const http = require ("http");
const express = require("express");

const app = express();

app.listen(8080 , function(){
    console.log("server is running");
});

// http.createServer(function(req,res){
//     res.write("<h1>Server made using http module</h1>")
//     res.end();
// }).listen(8080);
