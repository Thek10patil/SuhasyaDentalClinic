import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialLogo from "./../../../images/Testimonials_Logo.png";

export default class TipContainer extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 8000,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      adaptiveHeight: true,
    };

    return (
      <div style={{ backgroundColor: "#03878F" }}>
        <p
          className="text-center"
          style={{ color: "#F9F7F8", paddingTop: "40px" }}
        >
          TIPS
        </p>

        <Slider {...settings}>
          <div>
            <p
              className="text-center font-weight-light"
              style={{ color: "#F9F7F8", paddingBottom: "40px" }}
            >
              All of out treatments and services are provided in a comfrotable,
              spa-like clinic, designed according to high-quality standards.
            </p>
          </div>
          <div>
            <p
              className="text-center font-weight-light"
              style={{ color: "#F9F7F8", paddingBottom: "40px" }}
            >
              All of out treatments and services are provided in a comfrotable,
              spa-like clinic, designed according to high-quality standards.
            </p>
          </div>
          <div>
            <p
              className="text-center font-weight-light"
              style={{ color: "#F9F7F8", paddingBottom: "40px" }}
            >
              All of out treatments and services are provided in a comfrotable,
              spa-like clinic, designed according to high-quality standards.
            </p>
          </div>
          <div>
            <p
              className="text-center font-weight-light"
              style={{ color: "#F9F7F8", paddingBottom: "40px" }}
            >
              All of out treatments and services are provided in a comfrotable,
              spa-like clinic, designed according to high-quality standards.
            </p>
          </div>
          <div>
            <p
              className="text-center font-weight-light"
              style={{ color: "#F9F7F8", paddingBottom: "40px" }}
            >
              All of out treatments and services are provided in a comfrotable,
              spa-like clinic, designed according to high-quality standards.
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
