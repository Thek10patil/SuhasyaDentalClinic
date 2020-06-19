import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cosmetic_Dentistry from "./../../../images/Cosmetic_Dentistry.png";
import Dental_Care_Service from "./../../../images/Dental_Care_Service.png";
import Emergency_Care_Service from "./../../../images/Emergency_Care_Service.png";
import Restoration_Dentistry from "./../../../images/Restoration_Dentistry.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const imageStyle = {
      width: "480px",
      height: "220px",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Cosmetic_Dentistry} alt="image" style={imageStyle}></img>
          </div>
          <div>
            <img src={Dental_Care_Service} alt="image" style={imageStyle} />
          </div>
          <div>
            <img src={Emergency_Care_Service} alt="image" style={imageStyle} />
          </div>
          <div>
            <img src={Restoration_Dentistry} alt="image" style={imageStyle} />
          </div>
          <div>
            <img src={Cosmetic_Dentistry} alt="image" style={imageStyle} />
          </div>
          <div>
            <img src={Dental_Care_Service} alt="image" style={imageStyle} />
          </div>
          <div>
            <img src={Emergency_Care_Service} alt="image" style={imageStyle} />
          </div>
          <div>
            <img src={Restoration_Dentistry} alt="image" style={imageStyle} />
          </div>
        </Slider>
      </div>
    );
  }
}
