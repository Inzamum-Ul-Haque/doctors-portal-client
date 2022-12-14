import React from "react";
import chair from "../../../Assets/images/chair.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero">
      <div className="bg-img rounded-lg mt-8 bg-center w-full h-full bg-no-repeat hero-content flex-col lg:flex-row-reverse p-9 text-white">
        <img alt="" src={chair} className="rounded-lg shadow-2xl lg:w-1/2" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
