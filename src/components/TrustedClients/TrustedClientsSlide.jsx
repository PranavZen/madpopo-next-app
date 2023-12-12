'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrustedSlideBox from "./TrustedSlideBox";
import trustedClientData from "./TrustedClintData";
function TrustedClientsSlide() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        }
      },
    ]
  };
  return (
    <div className="containe-fluid">
    <div className="clientTestSecTitle">
      <h5>Trusted By Clients And Industry Experts Alike</h5>
    </div>
      <div className="clientSlideRow">
        <div className="col-md-12">
          <Slider {...settings} className="clientSlickSlider">
            {trustedClientData.map(
              ({
                id,
                clientName,
                clientDescription,
                clientImage,
                clientPara,
              }) => (
                <TrustedSlideBox
                  key={id}
                  id={id}
                  clientName={clientName}
                  clientDescription={clientDescription}
                  clientImage={clientImage}
                  clientPara={clientPara}
                />
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TrustedClientsSlide;
