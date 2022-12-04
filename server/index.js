const http =require("http");
const requests=require("requests");



http.createServer((req,res)=>{
if(req.url==="/api/data"){

requests("https://type.fit/api/quotes").on("data",(chunk)=>{

     res.end(chunk); 
   



}).on("end", (err)=>{

if(err){


    console.log("connection closed due to errors");
}
console.log("end");
})

}
else{


    res.end(`
    <h1>page not found</h1>
    <a href="/api/data">home</a>
    
    
    `)
}

}).listen(5000,
    ()=>console.log("server started on port 5000")
    
    )



//https://type.fit/api/quotes