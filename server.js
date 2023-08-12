const sp = require('http');
// console.log(sp);

const server = sp.createServer((req,res)=>{
        if(req.url=='/')
        {
            res.write(`<h1>heading one</h1>
            <style>
                h1
                {
                    color:red;font-size:80px;text-align:center;
                }
            <style>
             <h2>this is home page </h2>`);
            res.end();
        }
        else if(req.url=='/about')
        {
            res.write("<h1>this is about page</h1>");
            res.end();
        }
        else{
            res.write("<h1>404 not found</h1>");
            res.end();
        }

});

server.listen(8080,()=>{
    console.log("server is running");
});



