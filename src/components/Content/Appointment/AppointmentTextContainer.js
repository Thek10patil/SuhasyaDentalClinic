import React from "react";

export default function AppointmentTextContainer() {
  return (
    <div>
      <p
        className="text-center"
        style={{ color: "#008A8F", paddingTop: "40px" }}
      >
        Contact Us
      </p>
      <p
        className="text-center"
        style={{ paddingBottom: "20px", fontSize: "25px" }}
      >
        Request An Appointment
      </p>
      <p
        className="text-center font-weight-light"
        style={{ paddingBottom: "40px" }}
      >
        Fill out the form below and we will contact you during our working
        hours.
      </p>
    </div>
  );
}
