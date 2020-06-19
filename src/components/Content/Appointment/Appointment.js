import React from "react";
import AppointmentTextContainer from "./AppointmentTextContainer";
import AppointmentFormContainer from "./AppointmentFormContainer";
export default function Appointment() {
  return (
    <div style={{ backgroundColor: "#F8F8F8", padding: "110px" }}>
      <AppointmentTextContainer />
      <AppointmentFormContainer />
    </div>
  );
}
