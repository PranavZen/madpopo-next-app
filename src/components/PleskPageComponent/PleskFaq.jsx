import React from "react";
import PleskFaqData from "./PleskFaqData";

function PleskFaq() {
  return (
    <div className="container" data-aos="fade-left" data-aos-duration="1200">
      <div className="wp_faqSectionTitle">
        <h5>Frequently Asked Questions For Plesk</h5>
      </div>
      <div className="wp_faqRow winFaq">
        {PleskFaqData.map((faqItems) => {
          return (
            <div className="wp_faq_Box" key={faqItems.id}>
              <h6>{faqItems.faqQue}</h6>
              <p>{faqItems.faqAns}</p>
              <ul className="ulList">
                <li>{faqItems.listLi1}</li>
                <li>{faqItems.listLi2}</li>
                <li>{faqItems.listLi3}</li>
                <li>{faqItems.listLi4}</li>
              </ul>
              <p className="secondPara">{faqItems.faqAns2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PleskFaq;
