function logarRequisicao(req, res, next) {
    console.log(req.method, req.url)
    console.log("o corpo da msg é:", req.body)

    next();

}

function travaSenha(req, res, next) {
    if (req.method === "GET" || req.query.senha === "123456") {
        next();
    } else {
        res.status(401).json({
            erro: "senha incorreta"
        });
    }
}

module.exports = {
    logarRequisicao,
    travaSenha
}
