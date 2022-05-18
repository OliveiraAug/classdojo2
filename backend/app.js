const express = require("express");
const {randonUUID} = require("crypto");

const app = express();


/*
app.get("/primeira-rota", (request, response) =>{
    return response.json({
        message: "Acessou a primeira rota com nodemon."
    });
}); 
*/
app.listen(4002, ()=> console.log("servidor está rodando na porta 4002"))