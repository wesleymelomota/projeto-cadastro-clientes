const users = require('../database/model/usuarios')

module.exports  = () => {
    //function que cria um usuario
    function salvar(req, res){
        try{
            
            const usuarios = new users({
                nome: req.body.nome,
                dataNascimento: req.body.dataNascimento,
                cpf: req.body.cpf,
                email: req.body.email,
                endereco: req.body.endereco,
                profissao: req.body.profissao
            })
        
            usuarios.save()
            res.json({msg: 'salvo com sucesso!'})
        }catch(err){
            console.log('não foi possivel criar', + err)
        }
        
    }

    //function que recebe o id e exclui o usuario
    async function deletar(req, res) {
        try{
            const Iduser = req.params.id
            
            if(Iduser){
                await users.findOne().deleteOne({_id: Iduser})
                res.json({msg: "usuario excluido!"})
            }
            else{
                res.json({msg: "usuario não encontrado"})
            }
        }catch(err){
            res.json({msg: `ERRO ${err}`})
        }
    }

    //function para atualizar um usuario
    async function update(req, res){
        try{
            const _id = req.params.id //recebo só o id por parâmetro para filtrar no db
            const nome = req.body.nome
            const dataNascimento = req.body.dataNascimento
            const cpf = req.body.cpf
            const email = req.body.email
            const endereco = req.body.endereco
            const profissao = req.body.profissao

            if(_id){
                await users.findOne({_id}).updateOne({nome, dataNascimento, cpf, email, endereco, profissao})
                res.json({msg: "atualizado com sucesso!"})
            }
            else{
                res.json({msg: "Usuario não encontrado"})
            }
        }
        catch(err){
            res.json({msg: `ERRO! ${err}`})
        }
    }

    //function para obter todas colections do db
    async function obter(req, res) {
        try{
            const usuarios = await users.find()
                      
            res.json({usuarios})
            
        }catch(err){
            res.json({msg: `ERRO ${err}`})
        }
    }

    //este function recebe um nome e retorna o obj referente ao nome caso exista
    async function user(req, res){
        try{
            const nome = req.params.nome
            
            if(nome){   //confere se o nome não é vazio           
                const user = await users.findOne({nome})//busca no db o nome passado como parametro
                if(user == null ){//confiro se o nome não é nulo e se existe no db
                    res.json({user: {msg: "Usuario não encontrado"}})
                }
                else{
                    res.json({user})//retorno o obj
                    
                }
            }
            else{
                res.json({msg: "ERRO! tente Novamente"})
            }
        }
        catch(err){
            res.json({msg: `ERRO! ${err}`})
        }
    }
    return {obter, salvar, deletar, update, user}
}

