import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProviders';
import { Navigate, useNavigation } from 'react-router-dom';
import Spinner from '../Pages/Shared/Spinner/Spinner';



// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    // Spinner
    const navigation = useNavigation();
	if (navigation.state === "loading") {
		return <Spinner></Spinner>;
	}
    if(user){
        return children
    }
    return (
       <Navigate to='/login' replace={true}>

       </Navigate>
    );
};

export default PrivateRoutes;