import React, { useContext } from "react";

import { useState, createContext } from "react";

const AuthContext = createContext(null)

export const AuthProvider = ({ children}) => {
    const [user, setUser] = useState(null);

    const login = (user) =>{
        setUser(user)
    } 
    const logOut = () => {
        setUser();
    }
    return(
        <AuthContext.Provider value={{user, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}