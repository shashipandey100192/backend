const sp = require('http');
// console.log(sp);

const server = sp.createServer((req,res)=>{
    res.write("hi");
        // res.write(sp);
    res.end();
});

server.listen(8080,()=>{
    console.log("server is running");
});



