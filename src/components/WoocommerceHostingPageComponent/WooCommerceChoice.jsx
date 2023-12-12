import Image from "next/image";
import React from "react";

function WooCommerceChoice() {
  return (
    <div className="wpBestChoiceWrap pt-15">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">
            Madpopo and WooCommerce: a winning combination
          </h2>
          <p className="woopara">
            With our Managed WordPress Ecommerce platform featuring WooCommerce,
            you have the flexibility to sell a variety of products and services
            online, from physical items to digital downloads, subscriptions, and
            more. Additionally, your plan comes equipped with free, exclusive
            WooCommerce Storefront extensions to enhance your online store.
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
                <h2>Easy to start online ecommerce business</h2>
                <p>
                Starting an online ecommerce business can be a daunting task, but with our WooCommerce hosting, it's never been easier. Our platform provides all the tools and resources you need to create and manage your online store. With a user-friendly interface and seamless integration with WooCommerce, you can start selling in no time!
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Managed WooCommerce Hosting</h2>
                <p>
                Our managed WooCommerce hosting plans offer web hosting services tailored for WooCommerce users. With ready-to-use features such as user-friendly hPanel, a 1-click installer, and pre-installed performance plugins, you can build a fast website and boost your online presence today.{" "}
                  <a href="https://blog.madpopo.com/how-to-supercharge-your-woocommerce-store-15-proven-tips-to-boost-website-speed-and-performance/">
                    Learn More!
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <Image src="/image/extremely-fast-performance.webp" alt="extremely-fast-performance" width={100} height={100}/>
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
                <Image src="/image/24-7-support.webp" alt="24-7-support" width={100} height={100}/>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Round-the-Clock Live Assistance</h2>
                <p>
                Our Customer Success team is available at all times through live chat. We’ve also got WooCommerce tutorials and an extensive knowledge base maintained by our in-house WooCommerce experts to help you succeed online.{" "}
                  <a href="/contact-us">Get Help!</a>
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Top-Notch Security Measures</h2>
                <p>
                Make use of our web application firewall developed in-house, free SSL certificate, and anti-DDoS protection to keep your website safe from all kinds of cyber attacks. Our plans also include automated daily backups, so you don’t need to worry about losing your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WooCommerceChoice;
