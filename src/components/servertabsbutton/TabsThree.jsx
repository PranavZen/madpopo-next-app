"use client";
import React, { useState } from "react";
import DedicatedServerCard1 from "../tabs/tabcontentbox/DedicatedServerCard1";
import DedicatedServerCard2 from "../tabs/tabcontentbox/DedicatedServerCard2";
import PleskVDSCard from "../pricecard/PleskVDSCard";
import PleskVPSCard from "../pricecard/PleskVPSCard";

function TabsThree() {
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
              Dedicated Server
            </label>

            <input
              type="radio"
              id="radio-2"
              name="tabs"
              checked={activeTab === 1}
              onChange={() => handleTabClick(1)}
            />
            <label className="tab" htmlFor="radio-2">
              Virtual Server
            </label>

            <input
              type="radio"
              id="radio-3"
              name="tabs"
              checked={activeTab === 2}
              onChange={() => handleTabClick(2)}
            />

            <span
              className="glider"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            ></span>
          </div>
        </div>
      </div>
      <div className="virtualServerTabPanel">
        {activeTab === 0 && (
          <div className="tab-content">
            <div
              className="vds_pricingBox container-fluid px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <PleskVDSCard />
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <div
              className="vds_pricingBox container-fluid px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <PleskVPSCard />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TabsThree;
