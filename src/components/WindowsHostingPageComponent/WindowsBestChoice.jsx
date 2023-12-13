import React from "react";
import Image from "next/image";

function WindowsBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">
            Reasons to Choose MadPopo Windows Website Hosting
          </h2>
          <p className="woopara">
            The world of business is changing. There are more online products
            than ever before, and more people are trying to get their hands on
            them. This means that the competition for online market share is
            fierce—and it's only going to get fiercer in the coming years. But
            don't worry! With <strong>Madpopo</strong> you can set yourself up
            for success with a professionally-hosted website that will help you
            stand out from the crowd by making your website more functional,
            beautiful, and user-friendly than any other site on the web.
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
                <h2>
                Need a powerful Windows Plan solution?
                </h2>
                <p>
                  Madpopo offers the most cost-effective Windows hosting options
                  that are quick, adaptable, trustworthy, and secure. Whether
                  you're building a brand-new Windows website from the beginning
                  or you've already worked on a number of websites, our Windows
                  hosting options are loaded with the tools you need to meet all
                  your requirements.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>
                Publish your site with Madpopo today
                </h2>
                <p>
                  It's essential to ensure that your website is fully optimized
                  and configured to take full advantage of Madpopo's hosting
                  services. You can consult with Madpopo's technical support
                  team for assistance with optimizing your website for the best
                  performance and security.
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
              <Image src="/image/24-7-support.webp" alt="Madpopo 24x7-support" width={100} height={100}/>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>
                Choose the best Windows Hosting plan for you
                </h2>
                <p>
                  When choosing a Windows Hosting package from Madpopo, you can
                  evaluate the needs of your website and make the best decision
                  possible. The traffic, storage, performance, and security
                  requirements of your website can be evaluated, and the hosting
                  package you select can be based on those needs.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>We are always available to help you</h2>
                <p>
                  You can reach our Customer Success team through live chat at
                  any time, and they will be happy to assist you. To help you
                  succeed in the online arena, we also have an extensive
                  knowledge base maintained by Windows experts in our own IT
                  department.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowsBestChoice;
