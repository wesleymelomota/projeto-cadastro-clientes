import './user.css'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default () => {
    const {user} = useSelector(state => state.users)
    const qual = useSelector(state => state.users)
    console.log(qual.user.msg)
    const [msg, setMsg] = useState()
    
    /*useEffect(() => { 
        setMsg(user.msg)
    },[msg])
    useEffect(() => { 
        alert(msg)
    },[msg])*/
    const renderRow = () => {
            return(
                <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.nome}</td>
                    <td>{user.dataNascimento}</td>
                    <td>{user.cpf}</td>
                    <td>{user.email}</td>
                    <td>{user.profissao}</td>
                    <td>{user.endereco}</td>
                    <td className="linha">
                            <button type="button" /*onClick={() => excluir(user._id)}*/ className="btn btn-danger">Deletar</button>
                            <button type="button" /*onClick={() => updateField(user)}*/ className="btn btn-primary m-2">Editar</button>
                    </td>
                </tr>
            ) 
    }
    const msgAlert = () => {
        return(
            <span>{alert(user.msg)}</span>
        )
    }

    return(
        <div className="info-user">

            {user.msg ? <span className="alert alert-danger" role="alert">{user.msg}</span> : <>
            <label>Nome:</label> <span>{user.nome}</span><br/>
            <label>Data nascimento:</label> <span>{user.dataNascimento}</span><br/>
            <label>CPF:</label> <span>{user.cpf}</span><br/>
            <label>Email:</label> <span>{user.email}</span><br/>
            <label>Profissão:</label> <span>{user.profissao}</span><br/>
            <label>Endereço:</label> <span>{user.endereco}</span> </>}
            
            <a href="/">Voltar</a>
        </div>
    )
}