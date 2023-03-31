const express = require('express');
const app = express();

const pessoas = [
    {
        nome: "João",
        email: "joao@gmail.com",
        idade: 25,
        hobbies: ["ler", "correr", "tocar violão"]
    },
    {
        nome: "Maria",
        email: "maria@gmail.com",
        idade: 30,
        hobbies: ["pintar", "cozinhar", "viajar"]
    },
    {
        nome: "Pedro",
        email: "pedro@gmail.com",
        idade: 20,
        hobbies: ["jogar futebol", "assistir filmes", "tocar guitarra"]
    }
];

app.get('/pessoas', (req, res) => {
    res.json(pessoas);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});