import React, { useState } from 'react'
import "./Authentication.css"
import { Card, Container, Alert, Button } from "react-bootstrap"
import {FaGoogle} from "react-icons/fa"
import { useAuth } from './AuthContext'
import { useHistory, useLocation } from 'react-router'

const Login = () => {
    const {login,} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const location = useLocation()
    const {from } = location.state || {from : {pathname: "/"}}

    async function handleLogin() {
        try {
            setError("")
            await login()
            setLoading(true)
            history.replace(from)
        } catch {
            setError("Failed to login")
        }
        setLoading(false)
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh"}}>
            <div className="w-100 text-center login-card" style={{maxWidth:"400px"}}>
                <Card style={{height:"400px"}} className="bg-dark">
                <Card.Title className="mt-5 mb-5">
                    <h2>Log In</h2>
                    {error && <Alert variant="danger">{ error}</Alert>}
                </Card.Title>
                <Card.Body>
                    <Button disabled={loading} className="button" onClick={handleLogin} ><FaGoogle className="google-icon" /> Continue with Google</Button>
                </Card.Body>
            </Card>
            </div>
        </Container>
    )
}

export default Login
