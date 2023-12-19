import Image from "next/image";
import React from "react";

function PleskChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle mb-18">
          <h2>You need a control panel that's both reliable and easy to use</h2>
        </div>
        <div
          className="wpBest_choiceRow padBtm_50"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>The Plesk Cotrol Panel</h2>
                <p>
                  Plesk is a control panel for web hosting that includes a
                  ready-to-code environment, strong extensions, and more. It
                  offers every feature you could possibly need to create
                  cloud-scaleable websites and applications.
                </p>
                <p>
                  Plesk is actually viewed by many as being more than just a
                  control panel. Creating websites with Plesk is simple thanks
                  to its intuitive interface and the various options it
                  includes.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Optimize your workflow to conserve 50% of your time</h2>
                <p>
                  By implementing and optimizing your workflow, you can conserve
                  up to 50% of your time and increase your productivity
                  significantly. Remember to regularly evaluate your workflow
                  and make adjustments as needed to ensure that you are using
                  your time as efficiently as possible.
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
                <h2>Setup and security for your website in one click</h2>
                <p>
                  A website's setup and security might take a lot of effort, but
                  one-click installation and security features can make things
                  much simpler. With only one click, <strong>Madpopo</strong>{" "}
                  can assist you with website setup and security
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Open and adaptable third-party interface</h2>
                <p>
                  Plesk offers seamless connection; it may be connected to
                  WHMCS, Ubersmith, the XML RPC API, the CLI API, and marketing
                  and SEO tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PleskChoice;
