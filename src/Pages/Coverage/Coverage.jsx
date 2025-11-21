import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const serviceCenters = useLoaderData();
    const mapRef=useRef()
  const position = [23.8103, 90.4125];
  const handleSearch=(e)=>{
    e.preventDefault();
    const searchedValue=e.target.search.value;
    const district=serviceCenters.find(c=>c.district.toLowerCase().includes(searchedValue.toLowerCase()));;
    const coord=[district.latitude,district.longitude];
    mapRef.current.flyTo(coord,14)
  }
  return (
    <div className="my-10">
      <div>
        <form onSubmit={handleSearch}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input className="focus:outline-none focus:ring-0 focus:border-none" type="search" name="search" required placeholder="Search" />
          </label>
        </form>
      </div>
      <div className=" w-full my-10 h-[800px]">
        <MapContainer
          center={position}
          zoom={7}
          ref={mapRef}
          scrollWheelZoom={true}
          className="h-[800px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                {center.covered_area.join(",")} <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
