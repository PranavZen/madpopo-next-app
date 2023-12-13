"use client";
import React, { useState } from "react";
import ThirdTabContent from "../tabs/tabcontentbox/ThirdTabContent";
import VPS2CardPrice from "../tabs/tabcontentbox/VPS2CardPrice";
import VssCardPrice from "../tabs/tabcontentbox/VssCardPrice";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="vsTabBtnWrap">
        <div className="tabBtnRow">
          <div className="tabs">
            <input
              type="radio"
              id="radio-1"
              name="tabs"
              checked={activeTab === 0}
              onChange={() => handleTabClick(0)}
            />
            <label className="tab" htmlFor="radio-1">
              Virtual Cloud Server
            </label>

            <input
              type="radio"
              id="radio-2"
              name="tabs"
              checked={activeTab === 1}
              onChange={() => handleTabClick(1)}
            />
            <label className="tab" htmlFor="radio-2">
              Virtual Storage Server
            </label>

            <input
              type="radio"
              id="radio-3"
              name="tabs"
              checked={activeTab === 2}
              onChange={() => handleTabClick(2)}
            />
            <label className="tab" htmlFor="radio-3">
              Virtual Dedicated Server
            </label>

            <span
              className="glider"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            ></span>
          </div>
        </div>
      </div>
      <div className="virtualServerTabPanel">
        {activeTab === 2 && (
          <div className="tab-content">
            <div
              className="vds_pricingBox container px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <ThirdTabContent />
            </div>
          </div>
        )}
        {activeTab === 0 && (
          <div className="tab-content">
            <div
              className="vds_pricingBox container px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <VPS2CardPrice />
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <div
              className="vds_pricingBox container px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <VssCardPrice />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tabs;
