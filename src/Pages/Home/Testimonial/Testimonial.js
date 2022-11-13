import React from "react";
import quote from "../../../Assets/icons/quote.svg";
import client1 from "../../../Assets/images/people1.png";
import client2 from "../../../Assets/images/people2.png";
import client3 from "../../../Assets/images/people3.png";
import ClientReview from "./ClientReview";

const Testimonial = () => {
  const clientReviews = [
    {
      id: 1,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: client1,
    },
    {
      id: 2,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: client2,
    },
    {
      id: 3,
      name: "Winson Herry",
      location: "California",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: client3,
    },
  ];

  return (
    <section className="mt-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-primary font-bold text-xl">Testimonial</h4>
          <h1 className="text-4xl ">What Our Patient Says</h1>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {clientReviews.map((review) => (
          <ClientReview key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
