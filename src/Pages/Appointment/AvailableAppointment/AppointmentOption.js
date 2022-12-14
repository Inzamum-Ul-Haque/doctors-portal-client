import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, price, slots } = appointmentOption;

  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <h2 className="text-secondary font-bold text-2xl text-center">
          {name}
        </h2>
        <p className="text-center">
          {slots.length > 0 ? slots[0] : "Try another day"}
        </p>
        <p className="text-center">
          {slots.length + " "}
          {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p className="text-center">
          <small>
            <b>Price: ${price}</b>
          </small>
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
