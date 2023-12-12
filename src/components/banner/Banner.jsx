import React from "react";
import TypedComponent from "./TypedComponent";
import MainTabSection from "../tabs/MainTabSection";

function Banner() {
  return (
    <div className="bgPositions">
      <div className="topElm_left"></div>
      <div className="leftElm_mid"></div>
      <div className="rightElm_mid"></div>
      <TypedComponent />
      <MainTabSection />
    </div>
  );
}

export default Banner;
