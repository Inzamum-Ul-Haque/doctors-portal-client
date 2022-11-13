import React from "react";
import Banner from "../Banner/Banner";
import HomeAppointment from "../HomeAppointment/HomeAppointment";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCards />
      <Services />
      <HomeAppointment />
      <Testimonial />
    </div>
  );
};

export default Home;
