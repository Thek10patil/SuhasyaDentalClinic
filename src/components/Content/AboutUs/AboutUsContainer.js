import React from "react";
import ClinicInfoContainer from "./ClinicInfoContainer";
import DoctorInfoContainer from "./DoctorInfoContainer";

export default function AboutUsContainer() {
  return (
    <div style={{ backgroundColor: "#F2F2F2" }}>
      <ClinicInfoContainer />
      <DoctorInfoContainer />
    </div>
  );
}
