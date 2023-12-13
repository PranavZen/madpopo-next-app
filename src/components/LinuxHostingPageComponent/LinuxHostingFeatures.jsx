import React from "react";
import Image from "next/image";

function LinuxHostingFeatures() {
  return (
    <div className="wp_featuersWrapper pt-20">
      <div className="wpSectionTitle">
        <h2>Superior Benefits in Higher Plans ?
        </h2>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <Image src="/image/wordpress/Optimized-Technology-new.webp" alt="Round-the-Clock Live Assistance" width={100} height={75}/>
              </div>
              <h4>Round-the-Clock Live Assistance</h4>
              <p>
              With our team, you can rest assured that you'll have access to support from your web host whenever you need it. 
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <Image src="/image/wordpress/WordPress-Staging-Tool-new.webp" alt="Effortless and Cost-Free Migration" className="width100" width={100} height={75}/>
              </div>
              <h4>Effortless and Cost-Free Migration</h4>
              <p>
              Your success is important to us, which is why we offer free website transfer and domain name registration services.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <Image src="/image/wordpress/Automatic-Updates-new.webp" alt="Speedy Website Creation" width={100} height={75}/>
              </div>
              <h4>Speedy Website Creation</h4>
              <p>Launch your website quickly with a comprehensive solution that includes your site builder - either WordPress or Weebly.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <Image src="/image/wordpress/1-Click WordPress-Installer-new.webp" alt="1-Click WordPress Installer" className="width100" width={100} height={75}/>
              </div>
              <h4>E-Commerce Options</h4>
              <p>Begin your online store with a complimentary installation of the shopping cart of your choice. 
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <Image src="/image/wordpress/Automated-Backups-new.webp" alt="Automated Backups" width={100} height={75}/>
              </div>
              <h4>Security is Always a Priority for Us  </h4>
              <p>Protect your website from cyber threats with our Premium and Business shared hosting plans that come enhanced security.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <Image src="/image/wordpress/WordPress-Pro-Features-new.webp" alt="WordPress Pro Features" width={100} height={75}/>
              </div>
              <h4>Easy Site Administration              </h4>
              <p>Easily manage your website using our user-friendly Client Area and Site Tools, packed with a range of features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinuxHostingFeatures;
