import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../UseAuthHook/useAuth';

    const instance = axios.create({
  baseURL: 'http://localhost:3000'

});
const useSecureAxios = () => {
  const {user}=useAuth();

  useEffect(()=>{
   const reqInterceptor= instance.interceptors.request.use((config)=>{
      
      config.headers.authorization=`Bearer ${user.accessToken}`
      return config
    })

    // Interceptor for response
    const resInterceptor=instance.interceptors.response.use((response)=>{

      return response;

































      
    },(error)=>{
      console.log(error);
      return Promise.reject(error);
    })
    return ()=>{
      instance.interceptors.request.eject(reqInterceptor)
      instance.interceptors.response.eject(resInterceptor)
    }
  },[user])
    return (
       instance
    );
};

export default useSecureAxios;