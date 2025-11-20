import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { auth } from "./../../../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
    const [user,setUser]=useState(null);
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut=()=>{
    setLoading(true);
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    return ()=>{
        unsubscribe();
    }
  },[])
  const AuthInfo = {
    createAccount,
    signIn,
    loading,
    logOut,
    user,
    setUser
  };
  return <AuthContext value={AuthInfo}>{children}</AuthContext>;
};

export default AuthProvider;
