const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.cadastrarUsuario = (req, res) => {
    const usuario = new Usuario (req.body);
        usuario.save()
        .then((usuarioSalvo) => {
        res.status(201).json(usuarioSalvo);
      })
        .catch((erro) => {
          res.status(400).json({
            mensagem: "Erro ao criar Usuario. Verifique os dados enviados.",
            detalhes: erro.message
        });
    });
};



// Função de login
exports.login = async (req, res) => {
    try {
    const {email, senha} = req.body;

    const usuario = await Usuario.findOne({email});
    
    if(!usuario) {
        return res.status(401).json({mensagem: "Email ou senha inválidos."});
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if(senhaValida) {
        const token = jwt.sign(
            { id: usuario._id },
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );


    
    
    res.status(200).json({
        mensagem: "Login bem-sucedido!", 
        token,
        usuario: {
            id: usuario._id,
            nome: usuario.nome,
            email: usuario.email
    }
    });

    }} catch (erro) {
        res.status(500).json({message: "Erro interno do servidor."});
    }
};

