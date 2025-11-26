import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useSecureAxios from '../../Hook/useSecurAxios/useSecureAxios';

const PaymentSuccess = () => {
    const [Transaction,setTransaction]=useState("");
    const [searchParams]=useSearchParams();
    const sessionsId=searchParams.get('session_id');
    const secureAxios=useSecureAxios();
    useEffect(()=>{
        secureAxios.patch(`/payment-success?sessionId=${sessionsId}`)
        .then(result=>
        {
            setTransaction(result.data.transactionId);
        }
        );
    },[sessionsId,secureAxios])
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='card  p-10 shadow-lg'>
                <h2 className='text-3xl font-semibold'>Payment Successfull</h2>
                <div className='flex gap-3'>

                <b>Transaction Id : </b>
                <span className='text-green-800 font-semibold'>{Transaction}</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;