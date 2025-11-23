import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useSecureAxios from '../../Hook/useSecurAxios/useSecureAxios';

const PaymentSuccess = () => {

    const [searchParams]=useSearchParams();
    const sessionsId=searchParams.get('session_id');
    const secureAxios=useSecureAxios();
    useEffect(()=>{
        secureAxios.patch(`/payment-success?sessionId=${sessionsId}`)
        .then(result=>console.log(result));
    },[sessionsId,secureAxios])
    return (
        <div>
            Payment sucessfully done!
        </div>
    );
};

export default PaymentSuccess;