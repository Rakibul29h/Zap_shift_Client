import React from "react";
import reviewQutes from "../../../assets/reviewQuote.png";
import './reviewCard.css'
const ReviewCard = ({review}) => {
  return (
    <div className="rounded-2xl shadow-lg p-5 max-w-sm">
      <div>
        <img src={reviewQutes} alt="" />
      </div>
      <div>
        <p className="text-left">
          {review.review}
        </p>
      </div>
      <div className="border-t-2 border-dashed border-gray-200 mb-6"></div>
      <div className="flex items-center space-x-4">
        {/* Avatar Circle */}
        <div
          className="w-12 h-12 rounded-full shrink-0 bg-secondary overflow-hidden"
          
          aria-label="Author Avatar"
        >
         <img className="rounded-full" src={review.user_photoURL} alt="" />
        </div>

  
        <div>
          <h3 className="text-gray-900 font-semibold text-base">
            {review.userName}
          </h3>
          <p className="text-gray-500 text-sm">Consumer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
