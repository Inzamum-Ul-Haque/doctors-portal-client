import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ selectedDate }) => {
  return (
    <div className="mt-16">
      <p className="text-center text-secondary font-semibold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
    </div>
  );
};

export default AvailableAppointment;
