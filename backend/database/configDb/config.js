const mongoose = require('mongoose')
const config = require('../strConnection/stringConnect')

//conexão ao DB
async function connect(){
    try{//usando async function para conectar ao db. config.MongoConnect é a string de conexão
        await mongoose.connect(config.MongoConnect)
        console.log('conectado ao db')
        
    }catch(err){
        console.log(`ERRO! não foi possivel se conectar: ${err}`)
    }
}
module.exports = connect