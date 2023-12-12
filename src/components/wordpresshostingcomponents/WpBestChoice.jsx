import React from "react";
import Image from "next/image";

function WpBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2>Why Our WordPress Hosting Is the Best Choice</h2>
        </div>
        <div
          className="wpBest_choiceRow padBtm_50"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Blazing Speed Performance</h2>
                <p>
                  At MadPopo, we prioritise fast load times to enhance user
                  experience, conversion rates, and SEO. Powered by Popo servers
                  and Popo Panel, our WordPress hosting solutions deliver
                  lightning-fast performance.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Managed WordPress Hosting</h2>
                <p>
                  Our <a href="https://blog.madpopo.com/why-choose-madpopo-for-wordpress-managed-hosting/">managed WordPress hosting</a> plans cater to WordPress users'
                  needs, providing user-friendly features such as Popo Panel, a
                  1-click installer, and pre-installed performance plugins.
                  Build a fast website and boost your online presence with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <Image src="/image/extremely-fast-performance.webp" alt="Madpopo extremely-fast-performance" width={100} height={100}/>
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
                <Image src="/image/24-7-support.webp" alt="Madpopo 24-7-support" width={100} height={100}/>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>24/7 Support</h2>
                <p>
                  Our Customer Success team is available at all times through
                  live chat. We’ve also got WordPress tutorials and an extensive
                  knowledge base maintained by our in-house WordPress experts to
                  help you succeed online. <a href="/help-center">Get help</a>
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Top-Notch Security Measures</h2>
                <p>
                  Make use of our web application firewall developed in-house,
                  free SSL certificate, and anti-DDoS protection to keep your
                  website safe from all kinds of cyber attacks. Our plans also
                  include automated daily backups, so you don’t need to worry
                  about losing your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WpBestChoice;
