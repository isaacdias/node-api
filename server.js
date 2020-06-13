// importar o express 
const express = require('express');

// executar o express
const app = express();

// criando a primeira rota
//  ('/') significa que é a rota raiz da aplicação
// o segundo parametro desse get recebee uma funçao com dois parametros (req, res)
// req simboliza a requisição que estou fazendo ao servidor
// res tem a ver com a resposta que darei para requisição
app.get('/', (req, res) => {
    res.send('Hello World')
});


// a aplicação irá ouvir a porta 3001 do navegador
app.listen(3001);

