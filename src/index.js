import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import RouterConfig from './router'


ReactDOM.render(
    <RouterConfig/>,
    document.getElementById('root')
)

serviceWorker.unregister()

