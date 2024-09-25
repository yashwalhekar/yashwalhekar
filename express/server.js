const express = require('express')

//creating instance of express

const app = express()

//createing a Port

const PORT = 5000



//define the router handler

app.get('/',(req,res)=>{
   res.send("I am Yash")
})

//start the server

app.listen(PORT,()=>{
    console.log(`server is running on this ${PORT}`);
    
})