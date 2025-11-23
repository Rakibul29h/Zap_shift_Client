import React from 'react';
import { useParams } from 'react-router';
import useSecureAxios from '../../Hook/useSecurAxios/useSecureAxios';
import { useQuery } from '@tanstack/react-query';


const Payment = () => {
    const {parcelId}=useParams();
    const secureAxiox=useSecureAxios();
    const {data:parcel=[]}=useQuery({
        queryKey:["parcel",parcelId],
        queryFn:async ()=>{
          const result=  await secureAxiox(`/parcels/${parcelId}`)
          return result.data
        }
    })
    const handlePayment=async()=>{
        const paymentInfo={
            cost:parcel.cost,
            senderEmail:parcel.senderMail,
            parcelId:parcel._id,
            parcelName:parcel.parcelName
        }
        const res=await secureAxiox.post('/create-checkout-session',paymentInfo);
        window.location.href=res.data
    }
    return (
        <div>
           <h2 className='text-3xl font-semibold'>Pay for {parcel.parcelName}</h2>

            <button className='btn btn-primary text-black' onClick={handlePayment}> pay</button>

        </div>
    );
};

export default Payment;