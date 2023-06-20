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
// IGQVJYUXRBbXV2VFVja1ZAxT2prcVRQMDB4V2JpcmhCYmtfai1wNWI2Y2djZAlhaSDFDRl9QMUFMN3FMMWctNVFuT2RnTzJVaE4xZAzJseXpKLTBITTdrNU00RGpIeG1CT0xzTWROSUpMeTgxckxkTXdxTWY0b1VBTkpXUkdz