import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const updateUser = (data) => {
    setCurrentUser(data);
  };
    // Sync the currentUser state with localStorage
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser)); // Corrected this line
    }, [currentUser]);

    console.log(currentUser);
    return (
        <AuthContext.Provider value={{ currentUser,updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};
