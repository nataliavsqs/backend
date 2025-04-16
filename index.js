const express = require("express");
const roteador = require("./roteador");
const {
    logarRequisicao,
    travaSenha
} = require("./intermediarios")
const app = express();
app.use(express.json());


//middleware
app.use(logarRequisicao)
app.use(travaSenha)



app.use(roteador);



app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
}); // o app vai funcionar no localhost 8000app.get("/professores/:idConsulta", (req, res) => {