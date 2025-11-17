import React from 'react';
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { MoveUpRight } from 'lucide-react';
const Banner = () => {
    return (
        <div>
            <Carousel
            autoPlay="True"
            infiniteLoop="True"

            >
                <div className='relative'>
                    <img src={banner1} />
                    <div className='flex items-center gap-4 absolute bottom-20 left-20'>
                        <div className='flex gap-0.5'>
                            <button className="btn rounded-full bg-primary text-xl">Track Your Parcel</button>
                            <div
                            className=' bg-secondary px-2 rounded-full color-primary flex justify-center items-center'
                            >
                               <MoveUpRight color="#ACC857" strokeWidth={3} />
                            </div>
                        </div>
                        <div>
                            <button className='btn font-semibold text-xl'>Be a Rider</button>
                        </div>
                    </div>
                    
                </div>
                <div className='relative'>
                    <img src={banner2} />
                       <div className='flex items-center gap-4 absolute bottom-20 left-20'>
                        <div className='flex gap-0.5'>
                            <button className="btn rounded-full bg-primary text-xl">Track Your Parcel</button>
                            <div
                            className=' bg-secondary px-2 rounded-full color-primary flex justify-center items-center'
                            >
                               <MoveUpRight color="#ACC857" strokeWidth={3} />
                            </div>
                        </div>
                        <div>
                            <button className='btn font-semibold text-xl'>Be a Rider</button>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={banner3} />
                      <div className='flex items-center gap-4 absolute bottom-20 left-20'>
                        <div className='flex gap-0.5'>
                            <button className="btn rounded-full bg-primary text-xl">Track Your Parcel</button>
                            <div
                            className=' bg-secondary px-2 rounded-full color-primary flex justify-center items-center'
                            >
                               <MoveUpRight color="#ACC857" strokeWidth={3} />
                            </div>
                        </div>
                        <div>
                            <button className='btn font-semibold text-xl'>Be a Rider</button>
                        </div>
                    </div>
                </div>
             
            </Carousel>
        </div>
    );
};

export default Banner;