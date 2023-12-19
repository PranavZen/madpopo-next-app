import React from "react";

import Image from "next/image";

function DomainRegistrationFeatures() {
  return (
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2>Domain Registration Features</h2>
        <p className="linuxpara">
          Designed to Support Growth and Deliver High Performance.
        </p>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className=" wp_fetureImageWrap text-left">
                <Image
                  src="/image/wordpress/Optimized-Technology-new.webp"
                  alt="Free Email Account"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <div className="domTextLeft">
                <h4>Free Email Account</h4>
                <p>
                  Receive 2 personalized Email Addresses such as
                  mail@yourdomain.com with free fraud, spam and virus
                  protection.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
                <Image
                  src="/image/wordpress/WordPress-Staging-Tool-new.webp"
                  alt="DNS Management"
                  className="width100"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <div className="domTextLeft">
                <h4>DNS Management</h4>
                <p>
                  Free lifetime DNS service which allows you to manage your DNS
                  records on our globally distributed and highly redundant DNS
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
                <Image
                  src="/image/FREE-E-mail-Forwarding.webp"
                  alt="Free Mail Forwards"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <div className="domTextLeft">
                <h4>Free Mail Forwards</h4>
                <p>
                  Create free email forwards and automatically redirect your
                  email to existing email accounts.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
                <Image
                  src="/image/wordpress/Automatic-Updates-new.webp"
                  alt="Bulk Tools"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <div className="domTextLeft">
                <h4>Bulk Tools</h4>
                <p>
                  Easy-to-use bulk tools to help you Register, Renew, Transfer
                  and make other changes to several Domain Names in a single
                  step.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
              <Image
                  src="/image/wordpress/Automatic-Updates-new.webp"
                  alt="Bulk Tools"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <div className="domTextLeft">
                <h4>Domain Forwarding</h4>
                <p>
                  Point your domain name to another website for free! Redirect
                  users when they type your domain name into a browser
                  (with/without domain masking & SEO)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
              <Image
                  src="/image/wordpress/Automatic-Updates-new.webp"
                  alt="Bulk Tools"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <div className="domTextLeft">
                <h4>Domain Theft Protection</h4>
                <p>
                  Protect your Domain from being transferred out accidentally or
                  without your permission with our free Domain Theft Protection.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap text-left">
              <Image
                  src="/image/wordpress/Automatic-Updates-new.webp"
                  alt="Bulk Tools"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <div className="domTextLeft">
                <h4>Easy to use Control Panel</h4>
                <p>
                  Use our intuitive Control Panel to manage your domain name,
                  configure email accounts, renew your domain name and buy more
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DomainRegistrationFeatures;
