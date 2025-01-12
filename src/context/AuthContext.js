import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signIn = (newUser, callback) => {
        setUser(newUser)
        setTimeout(() => {
            if (callback) {
                callback()
            }
        }, 300)
    }

    const signOut = (callback) => {
        setUser(null)
        setTimeout(() => {
            if (callback) {
                callback()
            }
        }, 300)
    }

    const value = { user, signIn, signOut }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}