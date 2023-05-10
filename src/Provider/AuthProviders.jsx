import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
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
        createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProviders;