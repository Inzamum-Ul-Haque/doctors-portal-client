import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patientName,
      slot,
      email,
      phone,
    };

    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="mt-5">
            <input
              disabled
              value={date}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full mt-3"
            />
            <select name="slot" className="select select-bordered w-full mt-3">
              {slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full mt-3"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full mt-3"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone no"
              className="input input-bordered w-full mt-3"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full mt-3"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
