import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import AuthContext from './AuthContext'
import { auth } from '../../firebase';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");
        useEffect(() => {
            onAuthStateChanged(auth,(user) => {
            setUser(user)
            })
        }, [user]);
        
        return (
            <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
        );
};