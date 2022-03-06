import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const{user} = useAuth()
    return (
          user.email? 
            children : 
            <Navigate to={{
                pathname:'/login',
                state:'/location'
            }}
             /> 
    );
};

export default PrivateRoute;