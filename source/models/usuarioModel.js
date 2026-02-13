const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    }
});


usuarioSchema.pre('save', async function() {
    
  
    if(!this.isModified('senha')){
        return;
    }


    const salt = await bcrypt.genSalt(10);
    this.senha = await bcrypt.hash(this.senha, salt);
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario;