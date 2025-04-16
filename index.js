const express = require("express");
const roteador = require("./roteador");
const {
    logarRequisicao,
    verificarToken
} = require("./intermediarios");
const {
    loginUsuario,
    recuperarSenha,
    novoCadastro
} = require("./controladores/usuarios");

const app = express();
app.use(express.json());

app.use(roteador);

// // Rotas públicas (não precisam de autenticação)
// app.post("/login", loginUsuario);
// app.post("/recuperar-senha", recuperarSenha);
// app.post("/cadastro", novoCadastro); // Cadastro sem necessidade de token

// // Middleware global para logar requisições
// app.use(logarRequisicao);

// // Middleware para proteger rotas
// app.use(verificarToken);

// // Rotas protegidas

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
});