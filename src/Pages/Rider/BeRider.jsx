import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/UseAuthHook/useAuth";
import useSecureAxios from "../../Hook/useSecurAxios/useSecureAxios";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import riderImg from "../../assets/agent-pending.png";
const BeRider = () => {
  const {
    register,
    handleSubmit,
    watch,
   
  } = useForm();

  const { user } = useAuth();
  const axiosSecur = useSecureAxios();
  const serviceCenter = useLoaderData();
  const navigate = useNavigate();
  const regionsArea = serviceCenter.map((r) => r.region);
  const regions = [...new Set(regionsArea)];

  const districtByRegion = (region) => {
    const districtData = serviceCenter.filter((d) => d.region == region);
    const district = districtData.map((d) => d.district);
    return district;
  };
  const riderRegion = watch("riderRegion");
  const handleRiderRequest = (data) => {
    
  
    
    Swal.fire({
      title: "Agree to be a Rider?",
      text: `We will be touch with you within 3 days`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agree",
    }).then((result) => {
      if (result.isConfirmed) {
        
        // axiosSecur
        //   .post("/parcels", data)
        //   .then((res) => {
        //     if (res.data.insertedId) {
        //       navigate("/dashboard/my-parcels");
        //     }
        //   })
        //   .catch((err) => console.log(err));
        console.log(data)
      }
    });
  };
  return (
    <div className="my-5 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          {/* Rider heading */}
          <div className="text-left px-5">
            <h1 className="text-3xl font-bold my-5">Be a Rider</h1>
            <p>
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </div>
          {/* Rider form and iamge */}
          <div className="gap-5">
            {/* Rider form */}
            <div className="px-5">
              <h3 className="text-2xl font-bold my-5">
                Tell us about yourself
              </h3>
              <form
                onSubmit={handleSubmit(handleRiderRequest)}
                className="text-lg"
              >
                <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <fieldset className="fieldset ">
                      <label className="label">Your Name</label>
                      <input
                        type="text"
                        {...register("riderName")}
                        className="input w-full focus:outline-none"
                        placeholder="Your Name"
                        defaultValue={user?.displayName}
                      />
                    </fieldset>
                    <fieldset className="fieldset ">
                      <label className="label">Your Email</label>
                      <input
                        type="email"
                        {...register("rider")}
                        className="input w-full focus:outline-none"
                        placeholder="Your E-mail"
                        defaultValue={user.email}
                      />
                    </fieldset>

                    <fieldset className="fieldset">
                      <label className="label">Your Age</label>
                      <input
                        type="text"
                        {...register("riderAge")}
                        className="input w-full focus:outline-none"
                        placeholder="Your Age"
                      />
                    </fieldset>
                    <fieldset className="fieldset ">
                      <label className="label">NID No</label>
                      <input
                        type="text"
                        {...register("rideNID")}
                        className="input w-full focus:outline-none"
                        placeholder="NID No"
                      />
                    </fieldset>
                  </div>
                  <div>
                    <fieldset className="fieldset">
                      <label className="label">Your Region</label>
                      <select
                        {...register("riderRegion")}
                        defaultValue={" "}
                        className="select w-full"
                      >
                        <option disabled={true}>Pick a Region</option>
                        {regions.map((region, index) => (
                          <option key={index} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </fieldset>
                    <fieldset className="fieldset">
                      <label className="label">Your District</label>
                      <select
                        {...register("riderDistrict")}
                        defaultValue=" "
                        className="select w-full"
                      >
                        <option disabled={true}>Pick a District</option>
                        {districtByRegion(riderRegion).map((dis, index) => (
                          <option key={index} value={dis}>
                            {dis}
                          </option>
                        ))}
                      </select>
                    </fieldset>

                    <fieldset className="fieldset ">
                      <label className="label">
                        Which area you want to work
                      </label>
                      <input
                        type="text"
                        {...register("riderAddress")}
                        className="input w-full focus:outline-none"
                        placeholder="Sender Address"
                      />
                    </fieldset>
                  </div>
                </div>
                <input className="btn btn-primary text-black hover:btn-secondary hover:text-white" type="submit" value="Submit Request" />
              </form>
            </div>
          </div>
    
          
        </div>
        <div>
             {/* Rider Image */}
            <div className="flex justify-center items-center">
              <img src={riderImg} alt="rider img" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BeRider;
