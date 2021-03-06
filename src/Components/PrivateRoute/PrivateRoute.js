import React from 'react'
import {Route, Redirect} from "react-router-dom"
import { useAuth } from '../Authentication/AuthContext'


const PrivateRoute = ({ component:Component, ...rest }) => {
    const { currentUser } = useAuth()
    return (
        <Route
        {...rest}
            render={(props) => {
                return currentUser ? <Component {...props} /> : <Redirect to={{pathname:"/login", state:{from: props.location}}} />
            }
        }
    >

        </Route>
    )
}

export default PrivateRoute
