import React from "react";
import { wpHostLefttImg, wpHostRightImg } from "../index";

function DedicatedBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">
            Get the Ultimate Performance with Dedicated Server Hosting from
            Madpopo
          </h2>
          <p className="woopara">
            For businesses that require powerful and dedicated resources for
            their websites or applications, Madpopo offers a range of dedicated
            server hosting solutions. Our hosted servers are designed to deliver
            the ultimate performance and reliability, providing you with a
            premium hosting experience.
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
                <h2>Full Control</h2>
                <p>
                  With our dedicated server hosting, you have complete control
                  over your server's resources, configurations, and settings,
                  giving you the flexibility to customize your hosting
                  environment according to your needs.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>High Performance</h2>
                <p>
                  Our dedicated servers are equipped with the latest hardware
                  and software technologies, delivering exceptional performance
                  and speed for your website or application.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <img src={wpHostRightImg} alt="" />
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
                <img src={wpHostLefttImg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Customization</h2>
                <p>
                  We provide you with complete freedom to customize your server
                  according to your specific needs, including your choice of
                  operating system, applications, and control panel.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Security</h2>
                <p>
                  Our dedicated server hosting solutions come equipped with
                  advanced security features such as firewalls, DDoS protection,
                  and SSL certificates to keep your website or application
                  secure and protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DedicatedBestChoice;
