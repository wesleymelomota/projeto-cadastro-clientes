import {BrowserRouter} from 'react-router-dom'
import './app.css'
import Rotas from '../components/routes/Rotas'


export default () => {
    return(
        <BrowserRouter> 
            <div className="app bg-secondary bg-gradient"> 
                <Rotas/>       
            </div>
        </BrowserRouter>
    )
};