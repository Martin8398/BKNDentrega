require('dotenv').config();
const express = require('express');
const app = require ('./server/server');
require ('./db/config')

const PORT = process.env.PORT || 8080 ;

app.listen(PORT, () =>{
    console.log(`Servidor de Universidad Larrosa inicializado en el puerto ${PORT}`);
})