import './search.css'
import { useState } from 'react'
import axios from 'axios'
import {addUser} from '../../redux/app/slice/CreateSlice'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faMagnifyingGlass, faPeopleGroup, faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons"


export default ({children}) => {
    const [nome, setNome] = useState()
    const dispatch = useDispatch()
    
    
    //função que busca o user no db
    const getUser = () => {
        axios.get(`http://localhost:8081/usuario/${nome}`)
            .then(({data}) => dispatch(addUser(data.user))/*setUsuario(data.user)*/)
            .catch((err) => console.log(`ERRO ${err}`))
    }
    
    return(
        <div className="search">
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/create">Cadastrar <FontAwesomeIcon icon={faPersonCirclePlus}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/users">Clientes <FontAwesomeIcon icon={faPeopleGroup}/></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/">Home <FontAwesomeIcon icon={faHome} /></a>
                        </li>
                        <li class="nav-item dropdown">
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href='/'>#</a>
                        </li>
                    </ul>
                    <div class="d-flex">
                        <input class="form-control me-2" onChange={(e) => setNome(e.target.value)} type="search" placeholder="Digite um nome..." aria-label="Pesquise um nome"/>
                        <Link to="/user">
                            <button class="btn btn-outline-success" onClick={() => getUser()} type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        </Link>
                    </div>
                    </div>
                    
                </div>
                </nav>
                
        </div>
    )
}