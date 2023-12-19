"use client";
import React from "react";
import { useState } from "react";
import HcPanel from "./HcPanel";
import panels from "./PanelsData";

function HcAccordion() {
  //   console.log(panels.generalQuestions);
  const [activeTab, setActiveTab] = useState(0);

  const activateTab = (index) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === index ? -1 : index));
  };
  return (
    <div className="accordion" role="tablist">
      <div className="generalQns accordionMB" id="generalQns">
        <h3>General Questions</h3>
        {panels.generalQuestions.map((panel, index) => (
          <HcPanel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={() => activateTab(index)}
          />
        ))}
      </div>
      <div className="mailBoxQuestions accordionMB" id="mailBoxQuestions">
        <h3>Mail Box Questions</h3>
        {panels.mailBoxQuestions.map((panel, index) => (
          <HcPanel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={() => activateTab(index)}
          />
        ))}
      </div>
      <div className="domainQuestions accordionMB" id="domainQuestions">
        <h3>Domain Questions</h3>
        {panels.domainQuestions.map((panel, index) => (
          <HcPanel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={() => activateTab(index)}
          />
        ))}
      </div>
      <div className="paymentOption accordionMB" id="paymentOption">
        <h3>Payment Option</h3>
        {panels.paymentOption.map((panel, index) => (
          <HcPanel
            key={index}
            activeTab={activeTab}
            index={index}
            {...panel}
            activateTab={() => activateTab(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HcAccordion;
