import React from "react";
import Image from "next/image";

function WindowsHostingFeatures() {
  return (
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2 className="wooTitle">
          What’s Included in Our Windows Web Hosting Plans?
        </h2>
        <p className="winPara">
          We make your Windows web hosting experience the best one by providing
          you with the most prominent features. Seamlessly host your
          applications that require ASP.NET, MS SQL, and PHP with these
          top-notch features
        </p>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-4">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <Image
                  src="/image/wordpress/highly-secure-reliable.png"
                  alt="Highly Secure and Reliable"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Highly Secure and Reliable</h4>
              <p>
                We offer you unlimited bandwidth so that thousands of users can
                always access your website worldwide. Not only that, your
                website will be hosted in our secure data center with daily
                backup as well as monitoring which enables you to rest at night,
                knowing your website is always online.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <Image
                  src="/image/plesk-control.webp"
                  alt="Powerful control panel- Plesk"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Powerful control panel- Plesk</h4>
              <p>
                We use the latest Plesk Onyx 17.5 control panel that has an easy
                and intuitive interface to manage the websites and emails. We
                offer a 1-click installation of many applications. With our web
                hosting, you can experience the ability to perform tasks
                quickly, easily and reliably
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <Image
                  src="/image/wordpress/1-Click WordPress-Installer-new.webp"
                  alt="Safety and Security"
                  className="width100"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Safety and Security</h4>
              <p>
                We ensure that your website is safe and secure behind the best
                of firewall Softwares and Hardware. To top it all we have a
                highly experienced staff.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <Image
                  src="/image/wordpress/free-sssl-certificate.png"
                  alt="Free SSL Certificate"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Free SSL Certificate</h4>
              <p>
                An SSL certificate on your website builds trust for anyone
                visiting your website. With our web hosting plans, you get Lets
                Encrypt SSL certificate without any additional cost.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <Image
                  src="/image/wordpress/malware-scan-removal.png"
                  alt="Malware Scan and Removal"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Malware Scan and Removal</h4>
              <p>
                We know how annoying it can be to be the victim of a hacked
                website. So, our malware removal tool will protect your website
                from any threats and malware.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="wp_featuresInnerBox"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="wp_fetureImageWrap">
                <Image
                  src="/image/wordpress/scalable-hosting.png"
                  alt="Scalable Hosting"
                  className="width100"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Scalable Hosting</h4>
              <p>
                We are here to serve you, whether you are a start-up or a Big
                Portal. We have built a resilient data center which swiftly
                aligns to the needs of our clients – be it bandwidth, storage,
                or networking speed, scaling is simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowsHostingFeatures;
