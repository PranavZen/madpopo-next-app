"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DDSData3 from "./hostingpalndata/DDSData3";
import DDSCard3 from "@/components/pricecard/DDSCard3";
function DedicatedServerCard3() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="main-homepage-item vpsSevtionWrap">
      <div className="vpsRow">
        <div className="swiper-container">
          <Slider {...settings} className="swiper-wrapper">
            {DDSData3.map(
              ({
                id,
                cardVpsTitle,
                cardVpsSubTitle,
                cardAnchorLink,
                cardVpsImg,
                cardVpsAltName,
                cardVpsOgPrice,
                cardVpsWebSpace,
                cardVpsCapacity,
                cardVpsCapacity2,
                cardVpsCapacity3,
                cardVpsSnap,
                cardVpsOPt1,
                cardVpsOPt2,
                cardVpsOPt3,
                cardVpsOPt4,
                cardVpsOPt5,
                cardVpsOPt6,
                priceYearlyInINR,
                priceTwoYearlyInINR,
                priceThreeYearlyInINR,
                priceYearlyInUSD,
                priceTwoYearlyInUSD,
                priceThreeYearlyInUSD,
                priceYearlyInEUR,
                priceTwoYearlyInEUR,
                priceThreeYearlyInEUR,
                width,
                height,
              }) => (
                <DDSCard3
                  id={id}
                  key={id}
                  cardVpsTitle={cardVpsTitle}
                  cardVpsSubTitle={cardVpsSubTitle}
                  cardAnchorLink={cardAnchorLink}
                  cardVpsImg={cardVpsImg}
                  cardVpsAltName={cardVpsAltName}
                  cardVpsOgPrice={cardVpsOgPrice}
                  cardVpsWebSpace={cardVpsWebSpace}
                  cardVpsCapacity={cardVpsCapacity}
                  cardVpsCapacity2={cardVpsCapacity2}
                  cardVpsCapacity3={cardVpsCapacity3}
                  cardVpsSnap={cardVpsSnap}
                  cardVpsOPt1={cardVpsOPt1}
                  cardVpsOPt2={cardVpsOPt2}
                  cardVpsOPt3={cardVpsOPt3}
                  cardVpsOPt4={cardVpsOPt4}
                  cardVpsOPt5={cardVpsOPt5}
                  cardVpsOPt6={cardVpsOPt6}
                  priceYearlyInINR={priceYearlyInINR}
                  priceTwoYearlyInINR={priceTwoYearlyInINR}
                  priceThreeYearlyInINR={priceThreeYearlyInINR}
                  priceYearlyInUSD={priceYearlyInUSD}
                  priceTwoYearlyInUSD={priceTwoYearlyInUSD}
                  priceThreeYearlyInUSD={priceThreeYearlyInUSD}
                  priceYearlyInEUR={priceYearlyInEUR}
                  priceTwoYearlyInEUR={priceTwoYearlyInEUR}
                  priceThreeYearlyInEUR={priceThreeYearlyInEUR}
                  width={width}
                  height={height}
                />
              )
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default DedicatedServerCard3;
