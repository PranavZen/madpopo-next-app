import React from "react";
import Image from "next/image";

function CoLocationBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">BEST COLOCATIONS AT THE BEST PRICE</h2>
          <p className="woopara">
            For Your Colocation Needs, We Provide Trustworthy and Secure
            Solutions.
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
                <h2>What We Provide</h2>
                <p>
                  Everything may be taken care of for you by us. We provide a
                  versatile, safe, and reasonably priced approach to advance
                  your web application.
                </p>
                <p>
                  Now that you are familiar with the fundamentals of
                  co-location, you may begin. Madpopo is dedicated to offering
                  you the best colocation services out there.{" "}
                  <a href="/help-center">Get Help!</a>
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Co-location Server Hosting Solutions for Businesses</h2>
                <p>
                  Co-location server hosting services are advantageous for
                  businesses of all sizes. We offer a secure and affordable
                  solution for businesses to access data storage so they can
                  concentrate on their core competencies.
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
                <h2>An Insight to Colocation Server Hosting</h2>
                <p>
                  Businesses that require a high degree of server control and
                  are prepared to spend money on the requisite hardware and IT
                  personnel may find colocation hosting to be a smart
                  alternative. It is also an excellent option for companies that
                  want reliable infrastructure and high-speed internet
                  connectivity but lacks the funds to establish and run their
                  own data centers.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>We are always available to help you</h2>
                <p>24/7 Assistance</p>
                <p>
                  Every colocation option includes Remote Hands, which gives you
                  24/7 access to thorough on-site support for any need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoLocationBestChoice;
