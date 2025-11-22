import axios from 'axios';
import React from 'react';

    const instance = axios.create({
  baseURL: 'http://localhost:3000',

});
const useSecureAxios = () => {

    return (
       instance
    );
};

export default useSecureAxios;