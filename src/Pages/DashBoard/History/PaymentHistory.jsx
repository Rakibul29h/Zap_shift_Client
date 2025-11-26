import React from "react";
import useSecureAxios from "../../../Hook/useSecurAxios/useSecureAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hook/UseAuthHook/useAuth";
import { format } from "date-fns";
const PaymentHistory = () => {
  const axiosSecure = useSecureAxios();
  const { user } = useAuth();
  const { data: payment_data = [] } = useQuery({
    queryKey: ["history", [user.email]],
    queryFn: async () => {
      const result = await axiosSecure(`/payments?email=${user.email}`);
      return result.data;
    },
  });
  return (
    <div>
      Payment history found.({payment_data.length});
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Currency</th>
              <th>Transaction Id</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
                payment_data.map((data,index)=>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{data.parcelName}</td>
                    <td>{data.currency}</td>
                    <td>{data.transactionId}</td>
                    <td>{format(new Date(data.paidAt), "hh:mm a, dd MMM yyyy")}</td>
                </tr>
                )
            }
            {/* <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
