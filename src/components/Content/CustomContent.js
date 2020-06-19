import React from "react";
import "./CustomContent.css";
import DentalServicesContainer from "./DentalServices/DentalServicesContainer";
import PhotoContainer from "./PhotoContainer";
import AboutUsContainer from "./AboutUs/AboutUsContainer";
import TestimonialContainer from "./Testimonial/TestimonialContainer";
import Appointment from "./Appointment/Appointment";
import TipContainer from "./Tip/TipContainer";
import TestimonialLogo from "./../../images/Testimonials_Logo.png";
export default function CustomContent() {
  return (
    <div>
      <PhotoContainer />
      <TipContainer />

      <DentalServicesContainer />

      <AboutUsContainer />

      <TestimonialContainer />

      <Appointment />
    </div>
  );
}
