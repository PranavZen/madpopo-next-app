import React from "react";
import Image from "next/image";

function WhoisCheckerBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">Explore Our Whois Search for Your Benefit</h2>
          <p className="woopara">
            Our Whois Lookup tool will assist in providing you with the most
            recent appropriate data, whether you're checking to see if a domain
            is available for registration, seeking a domain owner's contact
            information, or keeping track of a domain's expiration.
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
                <h2>Identify the domain's owner</h2>
                <p>
                  Use our WHOIS search feature to find out who the owner of a
                  domain is or to acquire one. The availability, ownership,
                  creation, and expiration of the domain name are all available
                  when you enter it.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Establish the expiration date of a domain</h2>
                <p>
                  Knowing a domain's expiration date is useful if you wish to
                  purchase it. The owner might decide to sell when the
                  expiration date draws near or, better yet, let it pass without
                  selling, and you'll be there to buy it.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="wp_choice_rightBox">
              <div className="wp_choiceImgWrap">
                <Image
                  src="/image/extremely-fast-performance.webp"
                  alt="Establish the expiration date of a domain"
                  width={525}
                  height={525}
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
                  alt="Verify a domain's ownership information"
                  width={525}
                  height={525}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Verify a domain's ownership information</h2>
                <p>
                  Your WHOIS Lookup results will show who or what entity owns or
                  controls that domain name, along with their contact details
                  like name, phone number, and address.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Find out whether a domain is available or expired</h2>
                <p>
                  Aiming for the ideal new website or domain name? If the domain
                  is up for registration or approaching expiration, your WHOIS
                  search will reveal this information to you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoisCheckerBestChoice;
