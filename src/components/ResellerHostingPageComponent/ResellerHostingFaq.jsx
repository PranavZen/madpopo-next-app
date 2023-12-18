import React from "react";
import ResellerHostinFaqData from "./ResellerHostinFaqData";

function ResellerHostingFaq() {
  return (
    <div className="container" data-aos="fade-left" data-aos-duration="1200">
      <div className="wp_faqSectionTitle">
        <h5>Frequently Asked Questions</h5>
      </div>
      <div className="wp_faqRow">
        {ResellerHostinFaqData.map((faqItems) => {
          return (
            <div className="wp_faq_Box" key={faqItems.id}>
              <h6>{faqItems.faqQue}</h6>
              <p>{faqItems.faqAns}</p>
              <p className="pt-5">{faqItems.faqAns1}</p>
              <p className="pt-5">{faqItems.faqAns2}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResellerHostingFaq;
