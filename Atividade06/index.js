const express = require('express');
const app = express();

const pessoa = {
    nome: "João",
    email: "joao@gmail.com",
    idade: 25,
    hobbies: ["ler", "correr", "tocar violão"]
};

app.get('/pessoa', (req, res) => {
    res.json(pessoa);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});