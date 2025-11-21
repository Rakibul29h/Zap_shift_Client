import { SpaceIcon } from "lucide-react";
import React from "react";
import { set, useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceCenter=useLoaderData();
  const regionsArea=serviceCenter.map(r=>r.region);
  const regions =[...new Set(regionsArea)];

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="my-20 px-10">
      <div>
        <h1 className="text-5xl font-bold my-5">Send a Parcel</h1>
        <h3 className="text-2xl font-semibold">Enter your parcel details</h3>
        <div className="mt-8 border-b opacity-20"></div>
      </div>

      <form onSubmit={handleSubmit(handleSendParcel)} className="text-lg">
        <div className="my-5 flex gap-5">
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value={"Document"}
              className="radio-primary"
            />{" "}
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value={"Non-document"}
              className="radio-primary"
            />{" "}
            Non-document
          </label>
        </div>

        <div className="flex w-full gap-10 my-5">
          <fieldset className="fieldset flex-1">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName", { required: true })}
              className="input w-full focus:outline-none"
              placeholder="Parcel Name"
            />
            {errors.parcelName?.type === "required" && (
              <span className="text-red-500"> Parcel Name is required</span>
            )}
          </fieldset>
          <fieldset className="fieldset flex-1">
            <label className="label">Parcel Weight (KG)</label>
            <input
              type="text"
              {...register("parcelWeight", { required: true })}
              className="input w-full focus:outline-none"
              placeholder="Parcel Weight (KG)"
            />
          </fieldset>
        </div>
        <div className="mt-8 border-b opacity-20"></div>

        {/* Sender and Reciver deatils  */}
        <div className="my-5 grid grid-cols-1 md:grid-cols-2  md:gap-10">
          {/* Sender detaisl part */}
          <div>
            <h4 className="text-xl mb-5 font-semibold">Sender Details</h4>
            <fieldset className="fieldset my-5">
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full focus:outline-none"
                placeholder="Sender Name"
              />
            </fieldset>
            <fieldset className="fieldset my-5">
              <label className="label">Sender Email</label>
              <input
                type="email"
                {...register("senderMail")}
                className="input w-full focus:outline-none"
                placeholder="Sender E-mail"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender Region</label>
              <select {...register("senderRegion")} defaultValue=" " className="select">
                <option disabled={true}>Pick a Region</option>
                {
                  regions.map((region,index)=><option key={index} value={region}>{region}</option>)  
                }

              </select>

            </fieldset>
            <fieldset className="fieldset my-5">
              <label className="label">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full focus:outline-none"
                placeholder="Sender Address"
              />
            </fieldset>
          </div>

          {/* Reciever details part */}
          <div>
            <h4 className="text-xl mb-5 font-semibold">Reciver Details</h4>
            <fieldset className="fieldset my-5">
              <label className="label">Reciver Name</label>
              <input
                type="text"
                {...register("ReciverName")}
                className="input w-full focus:outline-none"
                placeholder="Reciver Name"
              />
            </fieldset>
            <fieldset className="fieldset my-5">
              <label className="label">Reciver Email</label>
              <input
                type="email"
                {...register("ReciverMail")}
                className="input w-full focus:outline-none"
                placeholder="Reciver E-mail"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Reciver Region</label>
              <select {...register("reciverRegion")} defaultValue=" " className="select">
                <option disabled={true}>Pick a Region</option>
                {
                  regions.map((region,index)=><option key={index} value={region}>{region}</option>)  
                }

              </select>

            </fieldset>
            <fieldset className="fieldset my-5">
              <label className="label">Reciver Address</label>
              <input
                type="text"
                {...register("ReciverAddress")}
                className="input w-full focus:outline-none"
                placeholder="Reciver Address"
              />
            </fieldset>
          </div>
        </div>
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SendParcel;
