import React from "react";
import CustomHeader from "./CustomHeader";
import IconHeader from "./IconHeader";

export default function CustomNavbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className="sticky-top">
      <CustomHeader />
      <IconHeader />
    </div>
  );
}
