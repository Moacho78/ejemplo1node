/*'use strict';
 http=require('http');
const server =http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('hola mundo');
});
server.listen(3600);*/

// const express =require('express')
// const app=express()
// const port=3600

// app.get('/',(req,res)=>{
//     res.send('hola Mundo soy el mejor programador del mundo')
// })

// app.listen(port,()=>{
//     console.log('La aplicacion se esta ejecutando por el puerto'+port)
// })

const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const animalRoutes = require("./routes/animalRoutes");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); //permite leer los datos que vienen en la petición
app.use(parser.json()); // transforma los datos a formato JSON
//Gestión de las rutas usando el middleware
app.use("/api", animalRoutes);
app.use(express.json());
//Conexión a la base de datos
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));
//Conexión al puerto
app.listen(port, () => {
    console.log(`Example app listening on port ok  ${port}`)
});