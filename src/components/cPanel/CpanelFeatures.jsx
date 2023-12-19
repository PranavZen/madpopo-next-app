import React from "react";
import Image from "next/image";

function CpanelFeatures() {
  return (
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2>You'll be up and running in seconds with cPanel</h2>
        <p className="linuxpara vdsPara">
          The user-friendly cPanel interface eliminates the need for technical
          knowledge to administer your website and a hosting account. Without
          knowing difficult programming or command-line languages, you can
          complete a lot of simple tasks with only a few clicks. This makes
          cPanel a popular option for users of all levels, even newbies.
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
                  src="/image/Quickly-Provisioning.webp"
                  alt="Go Live"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Go Live</h4>
              <p>
                It's simple to begin going using cPanel. We give you the
                resources necessary to design and automate all server management
                operations, freeing you up to concentrate on empowering your
                clients and creating the full scope of their website experience.
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
                  src="/image/High-availability.webp"
                  alt="At your fingertips, flexibility and control"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>At your fingertips, flexibility and control</h4>
              <p>
                Manage the many features built into cPanel, or let your users
                take control. When it comes to what your customers need, you
                take the lead.
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
                  src="/image/Global-Availability.webp"
                  alt="Boost your business."
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Boost your business.</h4>
              <p>
                {" "}
                Are you prepared to develop? We give you access to add-ons,
                third-party plugins, white-label software, transfer tools, and
                much more with revenue-generating capabilities so you can scale
                easily.
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
                  src="/image/Best-Price-at-Best-Performance.webp"
                  alt="Users"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Users</h4>
              <p>
                Easily create websites and domains. Establishing and running
                email networks. Controlling and archiving web files
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
                  src="/image/Support-Round-The-Clock.webp"
                  alt="Executive"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Executive</h4>
              <p>
                {" "}
                Set up cPanel accounts for clients. Observe and safeguard your
                server. Data backup and transfer in a few clicks
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
                  src="/image/Storage-I-O-load-balancing.webp"
                  alt="Cybernation"
                  width={100}
                  height={75}
                  priority
                />
              </div>
              <h4>Cybernation</h4>
              <p>
                We provide a flexible platform that enables server and website
                management to be automated, simplified, and optimized within
                minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CpanelFeatures;
