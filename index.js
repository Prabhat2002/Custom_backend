// console.log("Hello Nodemon")
const http=require("http");
const server=http.createServer((req,res)=>
{
    console.log(req.url)
    if(req.url=="/")
    {
        res.writeHead(200,{"Content-type":"text/html"})
      
      res.write("<center>welcome to server</center>")
      res.end()
    }
    else if(req.url=="/home")
    {
        res.writeHead(200,{"Content-type":"text/html"})
      res.end("<center>welcome to server</center>")
    }
    else if(req.url=="/about")
    {
        res.writeHead(200,{"Content-type":"text/html"})
      res.write("<center>welcome to about-page</center>")
      res.end()
    }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("<center>welcome to contact-page/<center>")
      res.end()
    }
    else if(req.url=="/service")
    {
      res.writeHead(200,{"Content-type":"text/html"})
      res.write("<center>welcome to service-page</center>")
      res.end()
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<center><h1>Page Not Found!!</h1></center>")
    }
})

server.listen(8080,function(error) 
{
   if(error)
      console.log("Something went wrong");
   else
       console.log("hello Prabhat welcome to the server on port 8080")   
});
