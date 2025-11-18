import React from 'react';
import merchant from '../../../assets/location-merchant.png'
import merchantBg from '../../../assets/be-a-merchant-bg.png'
const Merchant = () => {
    return (
        <div className='bg-secondary rounded-2xl shadow-lg my-20 text-left flex relative p-20'
        style={{
            backgroundImage:`url(${merchantBg})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'top'
        }}>
            <div className='space-y-3'>
                <h2 className='text-3xl text-white font-bold'>Merchant and Customer Satisfaction is Our First Priority</h2>
                <p className='text-white w-3/4'>
                    We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                </p>
                <div className='flex gap-5'>
                    <button className='btn btn-primary rounded-full text-secondary'>Become a Merchant</button>
                    <button className='btn btn-outline btn-primary rounded-full text-primary hover:bg-secondary'>Earn with ZapShift Courier</button>
                </div>
            </div>
            <div>
                <img src={merchant} alt="" />
            </div>
        </div>
    );
};

export default Merchant;