/*'use strict';
 http=require('http');
const server =http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('hola mundo');
});
server.listen(3600);*/

const express =require('express')
const app=express()
const port=3600

app.get('/',(req,res)=>{
    res.send('hola Mundo soy el mejor programador del mundo')
})

app.listen(port,()=>{
    console.log('La aplicacion se esta ejecutando por el puerto'+port)
})