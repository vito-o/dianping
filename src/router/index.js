import React from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from '@/pages/login/login'

class RouterConfig extends React.Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Redirect extct from="/" to="/login" />
                </Switch>
            </HashRouter>
        )
    }
}

export default RouterConfig