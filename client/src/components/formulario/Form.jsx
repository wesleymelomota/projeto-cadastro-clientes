import './form.css'
import UseConfig from '../../hooks/StatesUteis'
import { useState } from 'react'
import axios from 'axios'
const {GetUser} = UseConfig()


export default (props) => {
    const [nome, setNome] = useState()
    const [dataNascimento, setData] = useState()
    const [cpf, setCpf] = useState()
    const [email, setEmail] = useState()
    const [profissao, setProfissao] = useState()
    const [endereco, setEndereco] = useState()
    /*pegar os dados do input armazenar no state e fazer uma requisicao via post com axios */
    
    const salvar = () => {
        axios.post('http://localhost:8081/cadastrar', {
            nome, dataNascimento, cpf, email, profissao, endereco
        }).then(({data}) => {
            alert(data.msg)
        }).catch((err) => {
            alert(`ERRO: ${err}`)
        })
    }

    return(
        <div className="formulario">

            <div className=" form-group row mb-3">
                    <div className="mb-3">
                        <label className="form-label">Nome:</label>
                        <input className='form-control' onChange={(e) => setNome(e.target.value)} value={nome} type="text" placeholder='Nome'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Data Nascimento:</label>
                        <input className='form-control' onChange={(e) => setData(e.target.value)} value={dataNascimento} type="date" placeholder='dd/mm/aa'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">CPF:</label>
                        <input className='form-control' onChange={(e) => setCpf(e.target.value)} value={cpf} type="number" placeholder='CPF'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='email@com'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Profissão:</label>
                        <input className='form-control' onChange={(e) => setProfissao(e.target.value)} value={profissao} type="text" placeholder='Profissão'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Endereço:</label>
                        <input className='form-control' onChange={(e) => setEndereco(e.target.value)} value={endereco} type="text" placeholder='Endereço'/>
                    </div>
                    <div className="div-btn">
                        <button onClick={() => salvar()} className="btn btn-success m-2" type='submit'>Salvar</button>
                        <a href='/'>
                            <button type="button" className="btn btn-secondary m-2">Cancelar</button>
                        </a>
                    </div>
            </div>
        </div>
    )
}