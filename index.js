import express from "express";
import { log } from "node:console";

let api = express();

api.get("/", (req, res) => {
    res.json( "Pagina inicial");
})

api.get("/user", (req, res) => {
    res.json( "Renner Medeiros");
    console.log('Usuário Logado');
    
})

api.listen(3000, () => {
    console.log('O servidor esta na porta http://localhost:3000');
});
 