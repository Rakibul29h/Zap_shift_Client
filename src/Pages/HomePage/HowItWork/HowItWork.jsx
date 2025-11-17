import { Truck } from 'lucide-react';
import React from 'react';

const HowItWork = () => {
    return (
        <div className='text-left my-20'>
            <h2 className='text-4xl font-bold  p-5'>How it Works</h2>

            <div className='grid grid-cols-1 md:grid-cols-4  gap-5'>
                <div className='rounded-2xl shadow-lg px-3 py-5'>
                    <div className='py-3.5 px-7'>
                         <Truck size={50} />
                    </div>
                    <div className="px-3">
                        <h3 className='text-xl py-2 font-medium'>Booking Pick & Drop</h3>
                        <p>
                            From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>
                </div>
                <div className='rounded-2xl shadow-lg px-3 py-5'>
                    <div className='py-3.5 px-7'>
                         <Truck size={50} />
                    </div>
                    <div className="px-3">
                        <h3 className='text-xl py-2 font-medium'>Cash On Delivery</h3>
                        <p>
                            From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>
                </div>
                <div className='rounded-2xl shadow-lg px-3 py-5'>
                    <div className='py-3.5 px-7'>
                         <Truck size={50} />
                    </div>
                    <div className="px-3">
                        <h3 className='text-xl py-2 font-medium'>Delivery Hub</h3>
                        <p>
                            From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>
                </div>
                <div className='rounded-2xl shadow-lg px-3 py-5'>
                    <div className='py-3.5 px-7'>
                         <Truck size={50} />
                    </div>
                    <div className="px-3">
                        <h3 className='text-xl py-2 font-medium'>Booking SME & Corporate</h3>
                        <p>
                            From personal packages to business shipments — we deliver on time, every time.
                        </p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default HowItWork;