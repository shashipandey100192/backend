const sp = require('http');
const fs = require('fs');

const server = sp.createServer((req,res)=>{
        if(req.url=='/')
        {
            fs.readFile("./public/index.html",function(err,a){
                res.writeHead(250,{"Content-Type":"UTF-8"});
                res.end(a);
            }) 
        }
        else if(req.url=='/about')
        {
            fs.readFile("./public/about.html",function(err,a){
                res.writeHead(250,{"Content-Type":"UTF-8"});
                res.end(a);
            }) 
        }
        else if(req.url=='/form')
        {
            fs.readFile("./public/form.html",function(err,a){
                res.writeHead(250,{"Content-Type":"UTF-8"});
                res.end(a);
            }) 
        }
        else{
            fs.readFile("./public/error.html",function(err,a){
                res.writeHead(404,{"Content-Type":"UTF-8"});
                res.end(a);
            }) 
        }

});

server.listen(8080,()=>{
    console.log("server is running");
});



