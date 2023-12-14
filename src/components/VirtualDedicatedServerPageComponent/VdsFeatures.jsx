import React from "react";
import Image from "next/image";

function VdsFeatures() {
  return (
    <div className="wp_featuersWrapper">
      <div className="wpSectionTitle">
        <h2>A virtual server can be up and running within seconds</h2>
        <p className="linuxpara vdsPara">
          When choosing a hosting company that has such an automatic
          provisioning system, you can typically choose a virtual server plan,
          provide the parameters you want, and have the server provisioned in a
          matter of minutes.
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
                <Image src="/image/Best-Price-at-Best-Performance.webp" alt="Quickly Provisioning" width={100} height={75}/>
              </div>
              <h4>Quickly Provisioning</h4>
              <p>
                All of our cloud servers are provisioned in as Quickly
                Provisioning. - your machine is online and pinging fast.
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
                <Image src="/image/High-availability.webp" alt="High availability" width={100} height={75}/>
              </div>
              <h4>High availability</h4>
              <p>
                High availability offers you protection against hardware failure
                and operating system malfunction. Your VM is available again
                within minutes and without any human intervention whatsoever.
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
                  alt="Global Availability"
                  width={100} height={75}
                />
              </div>
              <h4>Global Availability</h4>
              <p>
                {" "}
                Regardless of whether your services and apps are in the staging
                or production phase, our six worldwide regions offer dependable
                service with low latency and availability backed by a Service
                Level Agreement.
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
                <Image src="/image/Best-Price-at-Best-Performance.webp" alt="1-Click WordPress Installer"  width={100} height={75}/>
              </div>
              <h4>Best Price at Best Performance </h4>
              <p>
                Our goal is to always offer low prices and discounts to our
                customers. We are able to provide top-notch servers at an
                affordable cost to our clients.
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
                  alt="Support Round The Clock 
                "
                width={100} height={75}
                />
              </div>
              <h4>Support Round The Clock</h4>
              <p>
                {" "}
                Renowned industry publications and satisfied customers have
                lauded the team for their prompt problem-solving abilities.
                However, the support team never becomes complacent and
                continuously endeavors to improve their skills.
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
                <Image src="/image/Storage-I-O-load-balancing.webp" alt="WordPress Pro Features" width={100} height={75}/>
              </div>
              <h4>Storage I/O load balancing</h4>
              <p>
                Define different rules and preferences for managing the quality
                of your virtual machine I/O. You are thus guaranteed access
                hierarchy on a shared storage system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VdsFeatures;
