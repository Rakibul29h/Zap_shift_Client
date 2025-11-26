import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAuth from "../../../Hook/UseAuthHook/useAuth";
import {updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase.init";
import axios from "axios";
import useSecureAxios from "../../../Hook/useSecurAxios/useSecureAxios";
import SocialLogIn from "../../../Components/SocialLogIn/SocialLogIn";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();




const axiosSecure=useSecureAxios();
const navigate=useNavigate();
  const { createAccount, setUser,logOut } = useAuth();
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
          const photoURL=result.data.data.url;
          updateProfile(auth.currentUser,{
            displayName:data.name,
            photoURL: photoURL
          }).then(()=>{

            logOut()
            .catch(err=>{
              console.log(err)
            })
            const userData={
              email:data.email,
              name:data.name,
              photoURL:photoURL,
              createdAt:new Date()
            }

            try{
             axiosSecure.post("/users",userData)
             .then(res=>{
              if(res.data.insertedId)
              {

                navigate("/login")
              }
             })
              
              
            }catch(error){
              console.log("Error of inserting in the database",error);
            }
          })
          .catch(err=>console.log(err));
        });
        
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
            <SocialLogIn></SocialLogIn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
