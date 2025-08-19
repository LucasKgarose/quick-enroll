import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/use-auth';

const PrivateRoute: React.FC<{ redirectPath?: string }> = ({ redirectPath = '/login' }) => {
    const { user } = useAuth();
    return user ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

export default PrivateRoute;