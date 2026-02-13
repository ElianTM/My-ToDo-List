const mongoose = require('mongoose')

//conexão com o banco de dados e criação do modelo de tarefa
    const Tarefa = mongoose.model('Tarefa', {
      nome: { type: String, required: true },
      done: { type: Boolean, default: false },

      usuario: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: true  
    }
           });
           
module.exports = Tarefa;