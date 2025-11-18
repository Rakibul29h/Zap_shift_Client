import { MoveUpRight } from 'lucide-react';
import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className='space-y-3 mx-auto w-1/2'>
                <h2 className='text-3xl font-bold'>Frequently Asked Question (FAQ)</h2>
                <p >
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>

            </div>
            <div className='my-7 text-left'>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders..</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Is it suitable for all ages and body types?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Does it really help with back pain and posture improvement?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Does it have smart features like vibration alerts?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How will I be notified when the product is back in stock?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>
            <div className='flex gap-3 justify-center '>
                <button className='btn btn-primary rounded-full text-black'>See More FAQ's</button>
                <div
                    className=' bg-secondary px-2 rounded-full color-primary flex justify-center items-center'
                >
                    <MoveUpRight color="#ACC857" strokeWidth={3} />
                </div>
            </div>
        </div>
    );
};

export default FAQ;