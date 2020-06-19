import React from "react";
import "./Footer.css";
import CopyrightContainer from "./CopyrightContainer";
import FooterContainer from "./FooterContainer";

const CustomFooter = (props) => {
  return (
    // <div className="Footer">
    //   <h1>This is footer</h1>
    //   <div className="CopyRight">
    //     <p>@ Copyright reserved Suhasya Dental Clinic</p>
    //   </div>
    // </div>
    <div>
      <FooterContainer />
      <CopyrightContainer />
    </div>
  );
};

export default CustomFooter;
