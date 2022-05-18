const http = require("http");

http.createServer((request, response) =>{
    response.writeHead(200, { 'Content-Type': 'application/json' });

    if(request.url === "/aluno"){
        response.end(JSON.stringify({
            message: "rota de aluno."
        }));
    }

    if(request.url === "/gerencia"){
        response.end(JSON.stringify({
            message: "rota de gerencia."
        }));
    }

    response.end(JSON.stringify({
        message: "Erro de url."
    }));

}).listen(4001, () => console.log("Servidor está rodando na porta 4001"));