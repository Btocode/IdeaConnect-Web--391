import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react'

const PrivateRoute = () => {
    let {id} = useContext(AuthContext)

    return id ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;