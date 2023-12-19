"use client";
import React, { useState } from "react";
import VPS2CardPrice from "../tabs/tabcontentbox/VPS2CardPrice";
import VssCardPrice from "../tabs/tabcontentbox/VssCardPrice";
import Image from "next/image";
import DedicatedServerCard1 from "../tabs/tabcontentbox/DedicatedServerCard1";
import DedicatedServerCard2 from "../tabs/tabcontentbox/DedicatedServerCard2";
import DedicatedServerCard3 from "../tabs/tabcontentbox/DedicatedServerCard3";

function TabsTwo() {
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
              <span className="flgImg">
                <Image
                  src="/image/svg/india.svg"
                  alt="India"
                  width={21}
                  height={16}
                  priority
                />
              </span>{" "}
              ASIA
            </label>

            <input
              type="radio"
              id="radio-2"
              name="tabs"
              checked={activeTab === 1}
              onChange={() => handleTabClick(1)}
            />
            <label className="tab" htmlFor="radio-2">
              <span className="flgImg">
                <Image
                  src="/image/svg/usa.svg"
                  alt="USA"
                  width={21}
                  height={16}
                  priority
                />
              </span>{" "}
              USA
            </label>

            <input
              type="radio"
              id="radio-3"
              name="tabs"
              checked={activeTab === 2}
              onChange={() => handleTabClick(2)}
            />
            <label className="tab" htmlFor="radio-3">
              <span className="flgImg">
                <Image
                  src="/image/svg/europe.svg"
                  alt="EUROPE"
                  width={21}
                  height={16}
                  priority
                />
              </span>{" "}
              EUROPE
            </label>

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
              <DedicatedServerCard1 />
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
              <DedicatedServerCard2 />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-content">
            <div
              className="vds_pricingBox container-fluid px-0"
              data-aos="zoom-in"
              data-aos-duration="2200"
            >
              <DedicatedServerCard3 />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TabsTwo;
