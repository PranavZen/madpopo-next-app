import React from "react";
import DedicatedServerFaqData from "./DedicatedServerFaqData";

function DedecatedServerFaq() {
  return (
    <div className="container" data-aos="fade-left" data-aos-duration='1200'>
      <div className="wp_faqSectionTitle">
        <h5>Frequently Asked Questions</h5>
      </div>
      <div className="wp_faqRow">

      {
        DedicatedServerFaqData.map((faqItems)=>{
        return(
            <div className="wp_faq_Box" key={faqItems.id}>
            <h6>{faqItems.faqQue}</h6>
            <p>
            {faqItems.faqAns}
            </p>
            <p>
            {faqItems.faqAns1}
            </p>
            <p>
            {faqItems.faqAns2}
            </p>
            <p>
            {faqItems.faqAns3}
            </p>
          </div>
        )
      })
    }

        
      </div>
    </div>
  );
}

export default DedecatedServerFaq;
