import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from "./Firebase"
import firebase from "firebase/app"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)


const AuthProvider = ({ children }) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const login = () => {
        return auth.signInWithPopup(provider)
    }
    const logOut = () => {
        return auth.signOut()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])
    const value = {
        currentUser,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
    
}

export default AuthProvider
