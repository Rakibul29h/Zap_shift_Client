import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../Hook/UseAuthHook/useAuth";
import {updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase.init";
import axios from "axios";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createAccount, setUser, googleLog } = useAuth();
  const handleRegistration = (data) => {
    console.log(data);
    const file = data.photo[0];

    createAccount(data.email, data.Password)
      .then((result) => {
        setUser(result.user);
        const formData = new FormData();
        formData.append("image", file);

        const imagApi = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_imgBBKey
        }`;
        axios.post(imagApi, formData).then((result) => {
         console.log(result);
          updateProfile(auth.currentUser,{
            displayName:data.name,
            photoURL: result.data.data.url
          }).then(()=>console.log("Result updated"))
          .catch(err=>console.log(err));
        });
        
      })
      .catch((err) => console.log(err));
  };
  const handleGoolgeLogIn = (e) => {
    e.preventDefault();
    googleLog()
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card bg-base-100 text-[1rem] w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <form className="fieldset" onSubmit={handleSubmit(handleRegistration)}>
          <label className="label">Name</label>
          <input
            type="text"
            className="input focus:outline-none"
            placeholder="Your Name"
            {...register("name", { required: true })}
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input focus:outline-none"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-red-700">Email is Required</p>
          )}
          {/* File photo */}
          <label className="label">Photo</label>
          <input type="file" className="file-input" {...register("photo")} />
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            className="input focus:outline-none"
            placeholder="Password"
            {...register("Password", { required: true, minLength: 8 })}
          />
          {errors.Password?.type === "required" && (
            <p className="text-red-700"> PassWord Required</p>
          )}
          {errors.Password?.type === "minLength" && (
            <p className="text-red-700">
              Password must be greater than or qual 8 character
            </p>
          )}

          <button className="btn btn-neutral mt-4">Register</button>

          <div>
            <p className="text-[1rem]">
              Already have an Account?{" "}
              <Link
                to={"/login"}
                className="text-blue-600 underline font-semibold"
              >
                Log In
              </Link>
            </p>
          </div>
          <div>
            <button
              className="btn w-full hover:bg-base-300 bg-white text-black border-[#e5e5e5]"
              onClick={handleGoolgeLogIn}
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
