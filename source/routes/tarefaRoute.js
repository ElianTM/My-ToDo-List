const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para Listar Tarefas (GET)
router.get('/', authMiddleware, tarefaController.listarTarefas);

// Rota para Criar Tarefa (POST)
router.post('/', authMiddleware, tarefaController.criarTarefa);

// Rota para Deletar Tarefa (DELETE)
router.delete('/:id', authMiddleware, tarefaController.deletarTarefa);

// Rota para Atualizar Tarefa (PUT)
router.put('/:id', authMiddleware, tarefaController.atualizarTarefa);

module.exports = router;