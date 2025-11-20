import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/UseAuthHook/useAuth";

const Login = () => {
  const {signIn,user,setUser}=useAuth()
    const {register,handleSubmit}=useForm()
  const handleForm=(data)=>{
    signIn(data.email,data.password)
    .then(result=>{
      console.log(result);
      setUser(result);
    }).catch(err=>console.log(err))
  }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSubmit(handleForm)}>
          <label className="label">Email</label>
          <input type="email"
          {
            ...register("email")
          } className="input focus:outline-none" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"
          {
            ...register('password')
          } className="input focus:outline-none" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
