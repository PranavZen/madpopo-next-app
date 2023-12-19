import Image from "next/image";
import React from "react";

function ResellerBestChoices() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">
            Start Your Own Hosting Business with Reseller Hosting from Madpopo!
          </h2>
          <p className="woopara">
            If you're looking to start your own web hosting business or expand
            your existing services, Madpopo's reseller hosting solutions are the
            perfect choice. Our reseller hosting plans are designed to provide
            you with the tools and resources you need to offer your own web
            hosting services to your customers.
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
                <h2>Flexible Resource Allocation</h2>
                <p>
                  With our reseller hosting plans, you have the flexibility to
                  allocate server resources such as SSD space and bandwidth to
                  your customers as per their requirements, enabling you to
                  create customized hosting packages.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Complete Control</h2>
                <p>
                  You have complete control over your hosting business with our
                  reseller hosting plans. You can manage your customers' hosting
                  accounts, set pricing, and control billing through your own
                  custom control panel.
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
                <h2>White-Labeling</h2>
                <p>
                  With our reseller hosting plans, you can white-label our
                  services and customize the hosting experience with your own
                  branding, providing a seamless experience for your customers.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>24/7 Support</h2>
                <p>
                  Our dedicated support team is available round-the-clock to
                  assist you with any technical issues or concerns you may have.
                  We offer fast and reliable support through live chat, phone,
                  or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResellerBestChoices;
