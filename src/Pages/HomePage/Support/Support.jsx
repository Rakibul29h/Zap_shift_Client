import React from 'react';
import trackingImg from '../../../assets/live-tracking.png'
import safeDeliveryImg from '../../../assets/safe-delivery.png'
const Support = () => {
    return (
        <div className=''>
            <div className='rounded-3xl shadow-lg flex items-center gap-10 p-5 my-10 text-left'>
                <div>
                    <img src={
                        trackingImg
                    } alt="" />
                </div>
                <div className='border-l-2 border-dashed border-secondary px-7'>
                    <h3 className='text-2xl font-bold my-5'>Live Parcel Tracking</h3>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
               <div className='rounded-3xl shadow-lg flex items-center gap-10 p-5 my-10 text-left'>
                <div>
                    <img src={
                        safeDeliveryImg
                    } alt="" />
                </div>
                <div className='border-l-2 border-dashed border-secondary px-7'>
                    <h3 className='text-2xl font-bold my-5'>100% Safe Delivery</h3>
                    <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
               <div className='rounded-3xl shadow-lg flex items-center gap-10 p-5 my-10 text-left'>
                <div>
                    <img src={
                        safeDeliveryImg
                    } alt="" />
                </div>
                <div className='border-l-2 border-dashed border-secondary px-7'>
                    <h3 className='text-2xl font-bold my-5'>24/7 Call Center Support</h3>
                    <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
             <div className="w-full border-t-2 border-dashed mt-20 border-secondary opacity-20"></div>
        </div>
    );
};

export default Support;