const http = require("http")

// server create
const server = http.createServer((req,res)=>{
    res.end("hello world")
})
server.listen(3000,()=>{
    
})