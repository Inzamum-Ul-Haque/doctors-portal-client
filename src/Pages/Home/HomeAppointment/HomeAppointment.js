import React from "react";
import doctor from "../../../Assets/images/doctor.png";
import appointment from "../../../Assets/images/appointment.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";

const HomeAppointment = () => {
  return (
    <div
      className="hero mt-32 rounded-lg"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt=""
          src={doctor}
          className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <h4 className="text-lg text-primary font-bold">Appointment</h4>
          <h1 className="text-4xl font-bold text-white">
            Make an appointment Today
          </h1>
          <p className="py-6 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default HomeAppointment;
