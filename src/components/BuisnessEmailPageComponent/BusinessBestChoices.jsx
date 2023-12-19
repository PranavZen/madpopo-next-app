import Image from "next/image";
import React from "react";

function BusinessBestChoices() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">
            Looking for the best email hosting provider for your business?
          </h2>
          <p className="woopara">
            Look no further than Madpopo! We offer a range of email hosting
            solutions that are designed to meet the needs of businesses of all
            sizes.
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
                <h2>Custom Email Domain</h2>
                <p>
                  Create a custom email domain for your business to add a
                  professional touch to your email communications. With
                  Madpopo's email hosting, you can easily create and manage
                  custom email addresses using your own domain name.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Easy Setup</h2>
                <p>
                  Setting up your email hosting is easy with Madpopo. We provide
                  step-by-step guidance to help you create and manage your
                  custom email domain and email accounts.
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
                <h2>Professional Business Email</h2>
                <p>
                  Create a professional image for your business with our email
                  hosting solutions. With custom email domains and professional
                  email addresses, you can enhance your business's credibility
                  and reputation.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Small Business Email</h2>
                <p>
                  Our email hosting solutions are perfect for small businesses
                  that require a reliable and cost-effective email hosting
                  solution. With scalable plans and customizable features, you
                  can easily find a solution that fits your business's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessBestChoices;
