import React from "react";
import "./Layout.css";
import CustomNavbar from "../components/Navbar/CustomNavbar";
import CustomContent from "../components/Content/CustomContent";
import CustomFooter from "../components/Footer/Footer";

const CustomLayout = (props) => {
  return (
    <div style={{ positon: "relative" }}>
      <CustomNavbar />

      <div style={{ positon: "relative" }}>
        <CustomContent />
        <CustomFooter />
      </div>
    </div>
  );
};

export default CustomLayout;
