const http = require("http")

// server create
const server = http.createServer((req,res)=>{
    console.log(req.url)

    if(req.url=="/about"){
        res.end("The about page")
    }
    res.end("hello world")
})
server.listen(3000)