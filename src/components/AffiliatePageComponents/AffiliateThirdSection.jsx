import React from "react";
import Image from "next/image";

function AffiliateThirdSection() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div
          className="wpBest_choiceRow"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="col-md-5">
            <div className="wp_choice_rightBox">
              <div className="thirdSectTitle">
                <h2>Become an Affiliate in 3 Easy Steps</h2>
              </div>
              <div className="wp_choiceImgWrap">
                <Image
                  src="/image/24-7-support.webp"
                  alt="Become an Affiliate in 3 Easy Steps"
                  width={433}
                  height={433}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="wp_choice_leftBox">
              <div className="parent">
                <div className="div2 Lebox">
                  <span className="darkNum">01</span>
                  <h5>Free to Join</h5>
                  <p>
                    Signing up takes only a few minutes and is completely FREE.
                    You'll receive Rs. 500/- on your sign-up.
                  </p>
                </div>
                <div className="div3 Lebox">
                  <span className="darkNum">02</span>
                  <h5>Promote</h5>
                  <p>
                    Use your affiliate links and marketing materials provided by
                    our team to promote MadPopo.
                  </p>
                </div>
                <div className="div4 Lebox">
                  <span className="darkNum">03</span>
                  <h5>Earn Big</h5>
                  <p>Get a 20% commission on each sale you make.</p>
                </div>
                <div className="div5 Lebox">
                  <div className="accessBtnWrap">
                    <a
                      href="https://my.madpopo.com/register.php"
                      className="btn btn-orange coodiv-hover-y w-25 mt-9 coodiv-text-9 "
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliateThirdSection;
