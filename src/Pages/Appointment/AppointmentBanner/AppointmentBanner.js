import React from "react";
import chair from "../../../Assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import appointment from "../../../Assets/images/appointment.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      className="hero rounded-lg"
      style={{ background: `url(${appointment})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img alt="" src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="mr-8 text-white">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
