const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors()); // Habilita o CORS para permitir requisições de origens diferentes.

// Lista temporária para armazenar os cadastros em memória.
let cadastros = ['teste'];
let idCounter = 1; // Inicializa o contador de IDs com 1.

app.get('/cadastros', (req, res) => {
    res.json(cadastros);
});

app.post('/cadastros', (req, res) => {
    const novoCadastro = req.body;
    novoCadastro.id = idCounter; // Atribui o ID único ao novo cadastro.
    idCounter++; // Incrementa o contador de IDs.

    cadastros.push(novoCadastro);
    res.status(201).json(novoCadastro);
});

app.delete('/cadastros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    cadastros = cadastros.filter(cadastro => cadastro.id !== id);
    res.json({ message: 'Cadastro excluído com sucesso.' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
