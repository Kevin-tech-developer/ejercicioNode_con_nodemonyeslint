//importar librerias
const express = require('express');
const mongoose = require('mongoose');
//importar los userRoutes
const userRoutes = require('./routes/userRoutes');
//configuracion de dotenv
require('dotenv').config();

//inicializar express
const app = express();

//middleware para permitir recibir los json
app.use(express.json());

//usar las rutas importadas ya definidas
app.use('/user', userRoutes); 


//conectar a mongoDB
mongoose.connect(process.env.MONGO_URI,{

})
.then(()=> console.log("base de datos conectada"))
.catch((err)=> console.log('error al conectar la base de datos:',err.message))

//inicalizar el sevidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`servidor escuchando en http://localhost:${PORT}`)
})