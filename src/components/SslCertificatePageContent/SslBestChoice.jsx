import React from "react";
import Image from "next/image";

function SslBestChoice() {
  return (
    <div className="wpBestChoiceWrap">
      <div className="container">
        <div className="wpChoiceSecTitle">
          <h2 className="mb-12">The benefits of SafeSSL</h2>
        </div>
        <div
          className="wpBest_choiceRow padBtm_50"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="col-md-5">
            <div className="wp_choice_leftBox">
              <div className="wp_choice_ContentBox">
                <h2>Customer data is protected via SSL</h2>
                <p>
                  Data that is being sent back and forth between a server and
                  browser is protected by a SafeSSL Certificate. SafeSSL does
                  not compromise when it comes to the privacy and security of
                  the customer's data; encoding the data in an unreadable
                  format, it helps to safeguard the data from hackers and data
                  skimmers.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Enhanced Customer Trust and Income</h2>
                <p>
                  Your website is secure and has adopted SSL encryption if you
                  see a padlock, which is a trust signal. This is a visible
                  indicator that makes sure your clients disclose their
                  information on your website and trust its security and
                  validity.
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
                <h2>Increases website SEO rankings</h2>
                <p>
                  Google introduced HTTPS Ranking Signal in 2014. Your website
                  will become safe if you use SafeSSL, and your browsers will
                  display a trust indication (Pad Lock) in the address bar. Your
                  website's traffic will increase and your ranking will improve
                  as a result of this trust indication.
                </p>
              </div>
              <div className="wp_choice_ContentBox">
                <h2>Avoid Phishing Attacks with SafeSSL</h2>
                <p>
                  It is imperative that you protect your websites against these
                  assaults, and installing an SSL certificate is the best way to
                  do so. With SafeSSL, it is very hard to clone your website,
                  which is advantageous as most phishing attacks entail doing
                  so.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SslBestChoice;
