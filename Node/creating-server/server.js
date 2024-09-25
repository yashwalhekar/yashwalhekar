const http = require("http")

//!define Request handler
const requestHandler = (req,res)=>{
    console.log(req.url);
    
    res.writeHead(200,{"content-type": "text/plain"})
    res.end("hello world i am yash and i have belive in myself that i can achieve everything that i want in my life")
}

//!create the server----

const server = http.createServer(requestHandler)

//!start the server on port give a port to our server

const PORT = 3000
server.listen(PORT,()=>{
    console.log(`the server is running on http://localhost:${PORT}`);
    
})
