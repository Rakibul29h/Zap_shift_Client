import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/UseAuthHook/useAuth";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import SocialLogIn from "../../../Components/SocialLogIn/SocialLogIn";

const Login = () => {
  const { signIn, setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const handleForm = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        setUser(result);
        console.log(result);
        navigate(location?.state|| '/')
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body ">
        <form className="fieldset text-[1rem]" onSubmit={handleSubmit(handleForm)}>
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email")}
            className="input focus:outline-none"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password")}
            className="input focus:outline-none"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          <div className="my-2">
            <p>
              New to Zap Shift?{" "}
              <Link className="text-blue-800 font-semibold underline" to={"/register"}>
                
                Register
              </Link>
            </p>
          </div>
          <div className="flex gap-5 justify-center">
            <b>Or</b>
          </div>
          <div>
            <SocialLogIn></SocialLogIn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
