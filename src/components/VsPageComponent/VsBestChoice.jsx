import Image from "next/image";
import React from "react";

function VsBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">
            Experience the Power of Virtual Server Hosting with Madpopo
          </h2>
          <p className="woopara">
            Madpopo offers virtual server hosting that is perfect for businesses
            and individuals who require dedicated resources for their websites
            or applications. Our virtual servers are hosted in top-tier data
            centers, ensuring reliable performance and fast load times:
          </p>
        </div>
        <div
          className="wpBest_choiceRow padBtm_50"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Cost-Effective</h2>
                <p>
                  With virtual server hosting, you pay only for the resources
                  you need, making it a cost-effective solution for businesses
                  of all sizes.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Root Access</h2>
                <p>
                  With full root access, you can customize your server's
                  settings and configurations to meet your specific needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <Image
                  src="/image/extremely-fast-performance.webp"
                  alt="Madpopo extremely-fast-performance"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="wpBest_choiceRow"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <Image
                  src="/image/24-7-support.webp"
                  alt="Madpopo 24x7-support"
                  width={100}
                  height={100}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Performance Optimization</h2>
                <p>
                  Our virtual servers are optimized for high-performance,
                  ensuring that your website or application always runs
                  smoothly.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>24/7 Support</h2>
                <p>
                  Our support team is available 24/7 to assist you with any
                  issues or concerns you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VsBestChoice;
