/* eslint-disable react/prop-types */
// src/contexts/AuthProvider.jsx
import React, { createContext, useState, useEffect } from 'react';
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth).finally(() => setLoading(false));
    };

    useEffect(() => {
        // Listener for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // Clean up the listener on component unmount
        return () => unsubscribe();
    }, []);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const newUser = userCredential.user;
                setUser(newUser);
                setLoading(false);
                return newUser;
            })
            .catch(error => {
                setLoading(false);
                throw error;
            });
    };

    const authInfo = {
        user,
        loading,
        createUser,
        loginWithGoogle,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
