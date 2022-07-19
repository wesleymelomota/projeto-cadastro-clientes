const app = require('express')()
const mid = require('./middlewares/mid')()
const cors = require('cors')
require('dotenv').config() 
const connect = require('./database/configDb/config')
const bodyParser = require('body-parser')


const porta = 8081


//conectando ao db
connect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

app.post('/cadastrar', mid.salvar)
app.get('/users', mid.obter)
app.get('/usuario/:nome', mid.user)
app.delete('/deletar/:id', mid.deletar)
app.put('/updateuser/:id', mid.update)


app.listen(porta, () => {
    console.log(`app rodando na porta ${porta}`)
})