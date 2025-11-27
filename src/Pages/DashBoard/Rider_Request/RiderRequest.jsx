import { useQuery } from "@tanstack/react-query";
import React from "react";
import useSecureAxios from "../../../Hook/useSecurAxios/useSecureAxios";
import { AsteriskIcon, Timer } from "lucide-react";
import { IoMdPersonAdd } from "react-icons/io";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
const RiderRequest = () => {
  const axiosSecure = useSecureAxios();
  const { data: rider_request = [],refetch } = useQuery({
    queryKey: ["rider_request", ["rider_id"]],
    queryFn: async () => {
      const result = await axiosSecure("/riders");

      return result.data;
    },
  });

      const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.email }
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Rider status is set to ${status}.`,
                        timer: 2000
                    });
                }
            })
    }

    const handleApproval = rider => {
        updateRiderStatus(rider, 'approved');
    }

    const handleRejection = rider => {
        updateRiderStatus(rider, 'rejected')
    }
  return (
    <div>
      <h2>Find Request ({rider_request.length})</h2>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rider_request.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.riderName}</td>
                <td>{data.rider}</td>
                <td>{data.riderDistrict}</td>
                <td className={`${data.status==="approved"?"text-green-600":"text-amber-500"}`}>{data.status}</td>
                <td>
                  <div className="flex gap-2">
                    <button className="btn" onClick={()=>handleApproval(data)}>

                    <IoMdPersonAdd size={20} />

                    </button>
                    <button className="btn" onClick={()=>handleRejection(data)}>

                    <IoPersonRemoveSharp size={20} />
                    </button>
                    <button className="btn">

                    <FaTrashAlt size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiderRequest;
