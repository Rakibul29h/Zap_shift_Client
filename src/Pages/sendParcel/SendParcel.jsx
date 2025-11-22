import { SpaceIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useSecureAxios from "../../Hook/useSecurAxios/useSecureAxios";
import useAuth from "../../Hook/UseAuthHook/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {user}=useAuth();
  const axiosSecur=useSecureAxios();
  const serviceCenter = useLoaderData();
  const regionsArea = serviceCenter.map((r) => r.region);
  const regions = [...new Set(regionsArea)];

  const districtByRegion = (region) => {
    const districtData = serviceCenter.filter((d) => d.region == region);
    const district = districtData.map((d) => d.district);
    return district;
  };
  const senderRegion = watch("senderRegion");
  const reciverRegion = watch("reciverRegion");

  // handle Send Parcel section
  const handleSendParcel = (data) => {
    let cost = 0;
    const parcelWeight = parseFloat(data.parcelWeight);
    if (data.parcelType === "Document") {
      cost = data.senderDistrict === data.reciverDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = data.senderDistrict === data.reciverDistrict ? 110 : 150;
      } else {
        const extraWeight = parcelWeight - 3;
        cost =
          data.senderDistrict === data.reciverDistrict
            ? 110 + extraWeight * 40
            : 150 + extraWeight * 40 + 40;
      }
    }
    Swal.fire({
      title: "Agree to send a parcel?",
      text: `You have to pay ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agree",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(cost);
        data.cost=cost;

        axiosSecur.post("/parcels",data)
        .then(res=>console.log("After posting data",res.data))
        .catch(err=>console.log(err))
      }
    });
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
                defaultValue={user?.displayName}
              />
            </fieldset>
            <fieldset className="fieldset my-5">
              <label className="label">Sender Email</label>
              <input
                type="email"
                {...register("senderMail")}
                className="input w-full focus:outline-none"
                placeholder="Sender E-mail"
                defaultValue={user.email}
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender Region</label>
              <select
                {...register("senderRegion")}
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
              <label className="label">Sender District</label>
              <select
                {...register("senderDistrict")}
                defaultValue=" "
                className="select w-full"
              >
                <option disabled={true}>Pick a Region</option>
                {districtByRegion(senderRegion).map((dis, index) => (
                  <option key={index} value={dis}>
                    {dis}
                  </option>
                ))}
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
              <select
                {...register("reciverRegion")}
                defaultValue=""
                className="select w-full"
              >
                <option disabled={true}>Select Region</option>
                {regions.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Reciver District</label>
              <select
                {...register("reciverDistrict")}
                defaultValue=""
                className="select w-full"
              >
                <option disabled={true}>Select District</option>
                {districtByRegion(reciverRegion).map((dis, index) => (
                  <option key={index} value={dis}>
                    {dis}
                  </option>
                ))}
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
