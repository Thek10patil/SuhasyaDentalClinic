import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialLogo from "./../../../images/Testimonials_Logo.png";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#F7F7F7",
        backgroundColor: "#03878F",
      }}
      onClick={onClick}
    />
  );
}

export default class TestimonialContainer extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      adaptiveHeight: true,
      nextArrow: <SampleArrow />,
      prevArrow: <SampleArrow />,
      pauseOnHover: true,
    };

    return (
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <div
          style={{
            backgroundColor: "#03878F",
            margin: "-3% 10% 0 10%",
          }}
        >
          <div style={{ backgroundColor: "#03878F", margin: "50px" }}>
            <Slider {...settings}>
              <div>
                <p
                  className="text-center"
                  style={{ color: "#F9F7F8", paddingTop: "40px" }}
                >
                  TREAT YOURSELF TO
                </p>
                <p
                  className="text-center"
                  style={{
                    color: "#F9F7F8",
                    paddingBottom: "20px",
                    fontSize: "25px",
                  }}
                >
                  Compregensive Dental Services.
                </p>
                <p
                  className="text-center font-weight-light"
                  style={{ color: "#F9F7F8", paddingBottom: "40px" }}
                >
                  All of out treatments and services are provided in a
                  comfrotable, spa-like clinic, designed according to
                  high-quality <br /> standards.
                </p>
              </div>
              <div>
                <p
                  className="text-center"
                  style={{ color: "#F9F7F8", paddingTop: "40px" }}
                >
                  TREAT YOURSELF TO
                </p>
                <p
                  className="text-center"
                  style={{
                    color: "#F9F7F8",
                    paddingBottom: "20px",
                    fontSize: "25px",
                  }}
                >
                  Compregensive Dental Services.
                </p>
                <p
                  className="text-center font-weight-light"
                  style={{ color: "#F9F7F8", paddingBottom: "40px" }}
                >
                  All of out treatments and services are provided in a
                  comfrotable, spa-like clinic, designed according to
                  high-quality <br /> standards.
                </p>
              </div>
              <div>
                <p
                  className="text-center"
                  style={{ color: "#F9F7F8", paddingTop: "40px" }}
                >
                  TREAT YOURSELF TO
                </p>
                <p
                  className="text-center"
                  style={{
                    color: "#F9F7F8",
                    paddingBottom: "20px",
                    fontSize: "25px",
                  }}
                >
                  Compregensive Dental Services.
                </p>
                <p
                  className="text-center font-weight-light"
                  style={{ color: "#F9F7F8", paddingBottom: "40px" }}
                >
                  All of out treatments and services are provided in a
                  comfrotable, spa-like clinic, designed according to
                  high-quality <br /> standards.
                </p>
              </div>
              <div>
                <p
                  className="text-center"
                  style={{ color: "#F9F7F8", paddingTop: "40px" }}
                >
                  TREAT YOURSELF TO
                </p>
                <p
                  className="text-center"
                  style={{
                    color: "#F9F7F8",
                    paddingBottom: "20px",
                    fontSize: "25px",
                  }}
                >
                  Compregensive Dental Services.
                </p>
                <p
                  className="text-center font-weight-light"
                  style={{ color: "#F9F7F8", paddingBottom: "40px" }}
                >
                  All of out treatments and services are provided in a
                  comfrotable, spa-like clinic, designed according to
                  high-quality <br /> standards.
                </p>
              </div>
              <div>
                <p
                  className="text-center"
                  style={{ color: "#F9F7F8", paddingTop: "40px" }}
                >
                  TREAT YOURSELF TO
                </p>
                <p
                  className="text-center"
                  style={{
                    color: "#F9F7F8",
                    paddingBottom: "20px",
                    fontSize: "25px",
                  }}
                >
                  Compregensive Dental Services.
                </p>
                <p
                  className="text-center font-weight-light"
                  style={{ color: "#F9F7F8", paddingBottom: "40px" }}
                >
                  All of out treatments and services are provided in a
                  comfrotable, spa-like clinic, designed according to
                  high-quality <br /> standards.
                </p>
              </div>
            </Slider>
          </div>

          <img
            className="img-fluid"
            src={TestimonialLogo}
            style={{
              width: "200px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "-50px",
              marginBottom: "-100px",
            }}
          />
        </div>
      </div>
    );
  }
}
