
import './index.css'
import Search from '../search/Search'
import BoasVindas from './BoasVindas'

export default ({children}) => {
    
    return (
            <div className="index-container"> 
                <Search/>
            
                <BoasVindas/>
                {children}
            </div>
        
    )
}