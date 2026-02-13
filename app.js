require('dotenv').config();
const mongoose = require('mongoose')
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const express = require('express');
const tarefaRoute = require('./source/routes/tarefaRoute');
const usuarioRoute = require('./source/routes/usuarioRoute');

const app = express();

app.use(express.json());
const port = 3000;

app.use('/tarefas', tarefaRoute);

app.use('/usuarios', usuarioRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((erro) => console.log('Erro ao conectar:', erro));


app.get('/', (req, res) => {
  res.send("Bem-vindo à minha API!");
}); 

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});



