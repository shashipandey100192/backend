const sp = require('http');
const fs = require('fs');
const path = require('path');

const server = sp.createServer((req,res)=>{
        if(req.url=='/')
        {
            fs.readFile("./public/service.html",function(err,a){
                res.writeHead(250,{"Content-Type":"UTF-8"});
                res.end(a);
            }) 
        }
        else if(req.url.match("\.css$"))
        {
            var csspath = path.join(__dirname,'public',req.url);
            console.log(csspath);
            var readpath = fs.createReadStream(csspath,"UTF-8");
            res.writeHead(200,{"Content-Type":"text/css"});
           readpath.pipe(res);
        }
        else if(req.url.match("\.js$"))
        {
            var csspath = path.join(__dirname,'public',req.url);
            console.log(csspath);
            var readpath = fs.createReadStream(csspath,"UTF-8");
            res.writeHead(200,{"Content-Type":"text/js"});
           readpath.pipe(res);
        }
        else if(req.url.match("\.jpg$") || req.url.match("\.png$"))
        {
            var imgpath = path.join(__dirname,'public',req.url);
            var readpath = fs.createReadStream(imgpath);
            res.writeHead(200,{"Content-Type":"text/image"});
           readpath.pipe(res);
        }
        if(req.url=='/home')
        {
            fs.readFile("./public/home.html",function(err,a){
                res.writeHead(250,{"Content-Type":"UTF-8"});
                res.end(a);
            }) 
        }

    console.log(req.url);        
});


server.listen(8080,()=>{
    console.log("server is running");
});



