//aqui fica a string de conexão com o mongoDB atlas
const config = {
    MongoConnect: `mongodb+srv://${process.env.DB_NAMEUSER}:${process.env.DB_PASSWORD}@encurt-url.t0ihx.mongodb.net/?retryWrites=true&w=majority`
}

module.exports = config