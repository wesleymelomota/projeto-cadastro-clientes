import {Route, Redirect, Switch} from 'react-router-dom'


import Form from '../formulario/Form'
import Index from '../index/Index'
import Usuarios from '../usuarios/Usuarios'
import User from '../usuarios/user/User'

export default () => {
    return (
        
        <Switch>
            <Route exact path='/' component={Index}/>
            <Route exact path='/users' component={Usuarios}/>
            <Route path='/create' component={Form}/>
            <Route path='/user' component={User}/>
            <Redirect from='*' to='/'/>
        </Switch>
        
    )
}