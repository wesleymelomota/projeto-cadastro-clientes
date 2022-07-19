const mongoose = require('mongoose')

//definindo os campos no db com este model
const Users = new mongoose.Schema({
    nome: String,
    dataNascimento: String,
    cpf: Number,
    email: String,
    endereco: String,
    profissao: String
})

const users = mongoose.model('users', Users)

module.exports = users