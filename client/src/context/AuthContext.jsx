import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    // Sync the currentUser state with localStorage
    useEffect(() => {
        localStorage.getItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    console.log(currentUser);
    return (
        <AuthContext.Provider value={{ currentUser,setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
