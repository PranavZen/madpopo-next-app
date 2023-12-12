"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstTabContent from "./tabcontentbox/FirstTabContent";
import SecondTabContent from "./tabcontentbox/SecondTabContent";
import WindowsTabContent from "./tabcontentbox/WindowsTabContent";
import ThirdTabContent from "./tabcontentbox/ThirdTabContent";

function MainTabSection() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  var settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    responsive: [
      { breakpoint: 557, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
    ],
  };
  var settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    fade: true,
  };
  return (
    <section id="myTabslide">
      <div className="container mt-lg-n30 mt-n15">
        <Slider
          {...settings2}
          className="main-homepage-plans-slider" 
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
          slidesToShow={1}
          adaptiveHeight={true}
        >
          <FirstTabContent />
          <SecondTabContent />
          <WindowsTabContent />
          <ThirdTabContent />
          {/* <SecondTabContent />
          <WindowsTabContent />
          <ThirdTabContent /> */}
          
        </Slider>
        <div className="services-box-container">
          <Slider
            {...settings}
            className="services-box-tabs-box border-opacity border-top-0"
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div className="services-box-tab">
              <i className="fa fa-wordpress"></i>
              <h5 className="coodiv-text-10 mb-0 mt-3 slickSyncBtnText">
                Wordpress hosting
              </h5>
              <p className="coodiv-text-12 mb-0 slickSyncSubBtnText">
              Hassle-Free Managed WordPress Hosting

              </p>
            </div>
            <div className="services-box-tab">
              <i className="fa fa-shopping-cart"></i>
              <h5 className="coodiv-text-10 mb-0 mt-3 slickSyncBtnText">
              Linux Web Hosting
              </h5>
              <p className="coodiv-text-12 mb-0 slickSyncSubBtnText">
              Fast & Secure Hosting For Any Website

              </p>
            </div>
            <div className="services-box-tab">
              <i className="fa fa-linux"></i>
              <h5 className="coodiv-text-10 mb-0 mt-3 slickSyncBtnText">
              Windows Web Hosting
              </h5>
              <p className="coodiv-text-12 mb-0 slickSyncSubBtnText">
              For websites built in ASP.Net & MSSQL
              </p>
            </div>
            <div className="services-box-tab">
              <i className="fa fa-windows"></i>
              <h5 className="coodiv-text-10 mb-0 mt-3 slickSyncBtnText">
              Virtual Dedicated Server
              </h5>
              <p className="coodiv-text-12 mb-0 slickSyncSubBtnText">
              Grow Your Business with Cloud Hosting
              </p>
            </div>
            
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default MainTabSection;
