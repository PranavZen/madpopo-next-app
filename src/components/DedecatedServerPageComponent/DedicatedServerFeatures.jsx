import React from "react";
import {
  wpFeatureImg1,
  wpFeatureImg2,
  wpFeatureImg3,
  wpFeatureImg4,
  wpFeatureImg5,
  wpFeatureImg6,
} from "../index";

function DedicatedServerFeatures() {
  return ( 
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2>We can set up your dedicated server in seconds</h2>
      </div>
      <div className="container">
        <div className="wp_FeatureRow">
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg1} alt="Optimized Technology" />
              </div>
              <h4>Optimized Technology</h4>
              <p>
                Our web hosting is powered by LiteSpeed - the fastest web server
                in the industry. Combined with the LiteSpeed Cache plugin, your
                WordPress websites will perform up to 4x faster than regular
                hosting.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg2} alt="WordPress Staging Tool" />
              </div>
              <h4>WordPress Staging Tool</h4>
              <p>
                If you wish to test new features on your website, try out
                MadPopo’s user-friendly staging tool. Generate a duplicate
                version of your site in just a click and make all the desired
                alterations – the live site won’t be affected.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg3} alt="Automatic Updates" />
              </div>
              <h4>Automatic Updates</h4>
              <p>
                Your software needs to be up-to-date to keep cyber threats at
                bay. That’s why we offer automatic core and security patches in
                our WordPress web hosting plans whenever WordPress releases
                updates.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg4} alt="1-Click WordPress Installer" />
              </div>
              <h4>1-Click WordPress Installer</h4>
              <p>
                Once you’ve purchased a hosting plan, you can install this CMS
                with a single click and proceed to develop your website
                straightaway.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg5} alt="Automated Backups" />
              </div>
              <h4>Automated Backups</h4>
              <p>
                Automated daily or weekly backups come with all of our hosting
                solutions, preventing data loss. With just a few clicks, you
                will be able to reinstate an earlier version of your website.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="wp_featuresInnerBox" data-aos="fade-up" data-aos-duration='1200'>
              <div className="wp_fetureImageWrap">
                <img src={wpFeatureImg6} alt="WordPress Pro Features" />
              </div>
              <h4>WordPress Pro Features</h4>
              <p>
                Boost productivity and enjoy increased freedom on your site
                using tools such as PHP version control, WP-CLI, Git
                integration, SSH access, MySQL database manager and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DedicatedServerFeatures;
