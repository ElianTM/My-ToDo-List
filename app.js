const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const tipos = [
    { id: 1, nome: "Estudos", id_pai: null },
    { id: 2, nome: "Trabalho", id_pai: null },
    { id: 3, nome: "Faculdade", id_pai: 1 },
    { id: 4, nome: "Projeto Pessoal", id_pai: 1 },
    { id: 5, nome: "Idiomas", id_pai: 1 },
]

const tarefas = [
    { id: 6, nome: "Terminar Configs de Node.js", id_pai: 4 },
    { id: 7, nome: "Estudos para o Enem", id_pai: 1 }
];

app.get('/', (req, res) => {
  res.send("TESTE DE CONEXAO - AGORA VAI!");
}); 

app.get('/tarefas', (req, res) => {
res.json(tarefas);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});

app.post('/tarefas', (req, res) => {
    const novaTarefa = req.body;
    tarefas.push(novaTarefa);

    console.log("Lista Atualizada!", tarefas);
    res.send("Lista atualizada com sucesso!");
});
