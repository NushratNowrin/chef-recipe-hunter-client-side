import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import app from '../Firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { GiPerspectiveDiceSixFacesTwo } from 'react-icons/gi';

export const AuthContext = createContext(null)
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={
        user,
        createUser,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProviders;