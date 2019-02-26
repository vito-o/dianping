import React from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from '@/pages/login/login'
import Home from '@/pages/home/home'

class RouterConfig extends React.Component{
    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Redirect extct from="/" to="/home" />
                </Switch>
            </HashRouter>
        )
    }
}

export default RouterConfig