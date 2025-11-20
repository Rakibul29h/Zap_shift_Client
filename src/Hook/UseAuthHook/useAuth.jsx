import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthContext/AuthContext';

const useAuth = () => {
    const authinfo = useContext(AuthContext)
    return (
        authinfo
    );
};

export default useAuth;