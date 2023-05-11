import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import app from '../Firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { GiPerspectiveDiceSixFacesTwo } from 'react-icons/gi';
import { useEffect } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser =( email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth changed', currentUser)
            setUser(currentUser);
        });

        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo ={
        user,
        createUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProviders;