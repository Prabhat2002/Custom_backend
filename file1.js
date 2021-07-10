const http=require('http');
const fs=require('fs');

const hostname='0.0.0.0';
const port=3000;
const home=fs.readFileSync('home.html');
const about=fs.readFileSync('./about.html');
const serve=fs.readFileSync('./serve.html');
// const contact=fs.readFileSync('./contact.html');

const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    if(url=='/' )
    {
        res.end(home)
    }
    else if(url=='/about')
    {
        res.end(about);
    }
    else if(url=='/serve')
    {
        res.end(serve);
    }
    else
    {
        res.statusCode=404;
        res.end("404 NOT FOUND" );
    }
})

server.listen(port,hostname,()=>
{
    console.log("Server is running..");
})