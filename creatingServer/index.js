// Importing the module 'http' for creating the web server
const http = require("http");

// creating the server
const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("<h1>Welcome to home page</h1>");
    }
    else if(req.url == "/about"){
        res.end("Admin Page");
    }
    else if(req.url == "/motivation"){
        res.end("There is no motivation bigger than money, so earn it");
    }
    else{
        res.end("404 Error");
    }
});

// listing to port
const port = 5000;

server.listen(port,"localhost",()=>{
    console.log("listening to port 5000");
})
