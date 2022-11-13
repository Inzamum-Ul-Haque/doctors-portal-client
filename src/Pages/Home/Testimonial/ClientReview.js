import React from "react";

const ClientReview = ({ review }) => {
  const { name, location, img, review: clientReview } = review;

  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p className="mb-3">{clientReview}</p>
        <div className="card-actions flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
