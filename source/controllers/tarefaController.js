const Tarefa = require('../models/tarefaModel');


// Função para listar todas as tarefas
exports.listarTarefas = (req, res) => {
  
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  
  const filtro = { ...req.query };

  const ordem = filtro.ordem;
  delete filtro.ordem;
  delete filtro.page;
  delete filtro.limit;

  filtro.usuario = req.userId;

  Tarefa.find(filtro)
    .sort(ordem)
    .skip(skip)
    .limit(limit)
    .then((tarefas) => res.status(200).json(tarefas))
    .catch((erro) => res.status(500).json(erro));
};

// Função de criar tarefas
exports.criarTarefa = (req, res) => {
    const tarefa = new Tarefa({...req.body, usuario: req.userId});
        tarefa.save()
        .then((tarefaSalva) => {
        res.status(201).json(tarefaSalva);
      })
        .catch((erro) => {
          res.status(400).json({
            mensagem: "Erro ao criar tarefa. Verifique os dados enviados.",
            detalhes: erro.message
        });
    });
};

// Função de deletar tarefas
exports.deletarTarefa = async (req, res) => {
    const id = req.params.id;

    try {
        const tarefaDeletada = await Tarefa.findOneAndDelete({ _id: id, usuario: req.userId });

        if (!tarefaDeletada) {
            return res.status(404).json({ message: "Tarefa não encontrada ou você não tem permissão para deletá-la." });
        }

        res.send("Tarefa deletada com sucesso!");
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};

// Função de atualizar tarefas
exports.atualizarTarefa = async (req, res) => {
    const id = req.params.id;
    const corpo = req.body;

    try {
        const tarefaAtualizada = await Tarefa.findOneAndUpdate(
            { _id: id, usuario: req.userId }, 
            corpo, 
            { new: true }
        );

        if (!tarefaAtualizada) {
            return res.status(404).json({ message: "Tarefa não encontrada ou você não tem permissão para alterá-la." });
        }

        res.json(tarefaAtualizada);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    }
};
