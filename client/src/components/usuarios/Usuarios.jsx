import { useState, useEffect } from 'react'
import Button from '../uteis/Button'
import './usuario.css'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"

export default() => {
    
    //const dispatch = useDispatch()
    
    //states que armazena os objetos vindo do backend e os dados do formulario
    const [user, setUser] = useState({_id: '', nome: '',
    dataNascimento: '',
    cpf: '',
    email: '',
    endereco: '',
    profissao: ''})
    const [listUsers, setList] = useState([])
    const [test, setTest] = useState({nome: "wesley"})
    //fazendo requesição no back-end e inserindo os dados no listUsers criando uma lista de objs
    useEffect(() => {
        axios.get("http://localhost:8081/users").then(({data}) => {
            setList(data.usuarios)
            
        }).catch((err) => console.log(`ERRO! ${err}`))
    }, [listUsers])

    //obj com o stado inicial
    const initialState = {
        nome: '',
        dataNascimento: '',
        cpf: '',
        email: '',
        endereco: '',
        profissao: ''
    }
    

    const getValueField = (e) => {
        const usuario = {...user}
        usuario[e.target.name] = e.target.value
        setUser(usuario)
        
    }

    //função que seta o initialstate nos campos do formulario o limpando
    const clear = () => {
        setUser(initialState)
    }

    //fução que renderiza o formulario
    const renderForm = () => {
        return(
            <div className="formulario form-group row mb-3">
                <div className="mb-3">
                    <label className="form-label">Nome:</label>
                    <input className='form-control' value={user.nome}  onChange={(e) => getValueField(e)} type="text" name="nome"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Data Nascimento:</label>
                    <input className="form-control" type="date" value={user.dataNascimento} onChange={(e) => getValueField(e)} name="dataNascimento" placeholder='dd/mm/aa'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">CPF:</label>
                    <input className="form-control" onChange={(e) => getValueField(e)} value={user.cpf} type="number" name="cpf"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input className="form-control" onChange={(e) => getValueField(e)} value={user.email} type="text" name="email" placeholder='ex@.com'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Endereço:</label>
                    <input className="form-control" onChange={(e) => getValueField(e)} value={user.endereco} type="text"  name="endereco"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Profissão:</label>
                    <input className="form-control" onChange={(e) => getValueField(e)} value={user.profissao} type="text" name="profissao"/>
                </div>
                <div className="btns">
                    <button type="button" className="btn btn-success" onClick={() => save(user)}>Salvar</button>
                    <button type="button" className="btn btn-secondary" onClick={() => clear()}>Cancelar</button>
                </div>
            </div>
        )
    }

    //função de renderizar a tabela 
    const renderTable = () => {
        return(
            <table className="table table-dark table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Data nascimento</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th>Profissão</th>
                    <th>Endereço</th>
                    <th>Ações</th>
                    <th>
                        <a href="/">
                            <Button  cor="grey">voltar</Button>
                        </a>
                    </th>
                </tr>
                </thead>
                <tbody>
                    {renderRow()}                
                </tbody>
            </table>
        )
    }

    //função de renderizar as linhas
    const renderRow = () => {
        return listUsers.map((dado) => {
            return(
                <tr key={dado._id}>
                    <td>{dado._id}</td>
                    <td>{dado.nome}</td>
                    <td>{dado.dataNascimento}</td>
                    <td>{dado.cpf}</td>
                    <td>{dado.email}</td>
                    <td>{dado.profissao}</td>
                    <td>{dado.endereco}</td>
                    <td className="linha">
                            <button type="button" onClick={() => excluir(dado._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button>
                            <button type="button" onClick={() => updateField(dado)} className="btn btn-primary m-2"><FontAwesomeIcon icon={faPencil}/></button>
                            
                    </td>
                    <td></td>
                </tr>
            ) 
        })
    }

    //função que salva os dados vindo do formulario
    const save = async (user) => {
        const BaseUrl = user._id ? `http://localhost:8081/updateuser/${user._id}` : `http://localhost:8081/cadastrar`
        const method = user._id ? 'put' : 'post'
        const {data} = await axios[method](BaseUrl, user)
            /*.then(({data}) => console.log(data.msg))
            .catch(err => console.log(err))*/
        alert(data.msg)
    }

    //função que exclui um usuario pelo id 
    const excluir = async (_id) => {
        const {data} = await axios.delete(`http://localhost:8081/deletar/${_id}`)
        alert(data.msg)
    }
    //essa função pega os dados da tabela e renderiza no formulario
    const updateField = (user) => {
        initialState._id = user._id
        initialState.nome = user.nome
        initialState.dataNascimento = user.dataNascimento
        initialState.cpf = user.cpf
        initialState.email = user.email
        initialState.endereco = user.endereco
        initialState.profissao = user.profissao
        setUser(initialState)
    }
 
    return(
        <div className="user">
            <div>
                <h1>Tabela de Usuarios</h1>
            </div>
                {renderTable()}
                {renderForm()}
            
        </div>
    )
}
