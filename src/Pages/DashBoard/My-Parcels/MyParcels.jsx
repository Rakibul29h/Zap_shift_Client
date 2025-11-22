import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hook/UseAuthHook/useAuth";
import useSecureAxios from "../../../Hook/useSecurAxios/useSecureAxios";
import { SquarePen, Trash2, View } from "lucide-react";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = useAuth();
  const secureAxios = useSecureAxios();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const result = await secureAxios.get(`/parcels?email=${user.email}`);
      return result.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        secureAxios.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your requested parcel has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td>{index + 1}</td>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>Payment Status</td>
                <td className="flex gap-2">
                  <button className="btn btn-square hover:bg-primary">
                    <View />
                  </button>
                  <button className="btn btn-square hover:bg-amber-500">
                    <SquarePen />
                  </button>
                  <button
                    className="btn btn-square hover:bg-red-500"
                    onClick={() => handleDelete(parcel._id)}
                  >
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
