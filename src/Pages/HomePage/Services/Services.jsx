import React from "react";
import serviceImg from "../../../assets/service.png";
const Services = () => {
  return (
    <div className="bg-secondary rounded-2xl  p-10">
      <div className="max-w-[800px] mx-auto text-white">
        <h2 className="text-4xl font-bold py-2">Our Services</h2>
        <p>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      {/* card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {/* per card */}
        <div className="rounded-2xl shadow-lg px-3 py-5 transition-all duration-300 bg-white hover:bg-primary">
          <div className="py-3.5 px-7 flex justify-center ">
            <img src={serviceImg} alt="service logo" />
          </div>
          <div className="px-3">
            <h3 className="text-2xl py-2 font-semibold">
              Express & Standard Delivery
            </h3>
            <p>
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg px-3 py-5 transition-all duration-300 bg-white hover:bg-primary">
          <div className="py-3.5 px-7 flex justify-center ">
            <img src={serviceImg} alt="service logo" />
          </div>
          <div className="px-3">
            <h3 className="text-2xl py-2 font-semibold">
             Nationwide Delivery
            </h3>
            <p>
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg px-3 py-5 transition-all duration-300 bg-white hover:bg-primary">
          <div className="py-3.5 px-7 flex justify-center ">
            <img src={serviceImg} alt="service logo" />
          </div>
          <div className="px-3">
            <h3 className="text-2xl py-2 font-semibold">
              Fulfillment Solution
            </h3>
            <p>
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg px-3 py-5 transition-all duration-300 bg-white hover:bg-primary">
          <div className="py-3.5 px-7 flex justify-center ">
            <img src={serviceImg} alt="service logo" />
          </div>
          <div className="px-3">
            <h3 className="text-2xl py-2 font-semibold">
             Cash on Home Delivery
            </h3>
            <p>
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg px-3 py-5 transition-all duration-300 bg-white hover:bg-primary">
          <div className="py-3.5 px-7 flex justify-center ">
            <img src={serviceImg} alt="service logo" />
          </div>
          <div className="px-3">
            <h3 className="text-2xl py-2 font-semibold">
            Corporate Service / Contract In Logistics
            </h3>
            <p>
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
        <div className="rounded-2xl shadow-lg px-3 py-5 transition-all duration-300 bg-white hover:bg-primary">
          <div className="py-3.5 px-7 flex justify-center ">
            <img src={serviceImg} alt="service logo" />
          </div>
          <div className="px-3">
            <h3 className="text-2xl py-2 font-semibold">
             Parcel Return
            </h3>
            <p>
              We deliver parcels within 24–72 hours in Dhaka, Chittagong,
              Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka
              within 4–6 hours from pick-up to drop-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
