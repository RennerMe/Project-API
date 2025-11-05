import express from "express";

let api = express();

api.get("/user", (req, res) => {
    res.json( "Renner Medeiros");
})

api.listen(3000, () => {
    console.log('O servidor esta na porta http://localhost:3000');
});
