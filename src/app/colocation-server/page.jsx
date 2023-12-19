import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import CoLocationCardPricing from "@/components/CoLocationPageComponent/CoLocationCardPricing";
import CoLocationBestChoice from "@/components/CoLocationPageComponent/CoLocationBestChoice";
import CoLocationFeatures from "@/components/CoLocationPageComponent/CoLocationFeatures";
import CoLocationPlanListing from "@/components/CoLocationPageComponent/CoLocationPlanListing";
import CoLocationFaq from "@/components/CoLocationPageComponent/CoLocationFaq";

export const metadata = {
  title:
    "The best solutions for your business when it comes to colocation server hosting",
  description:
    "Elevate your business with high-performance co-location server hosting. High-Performance Dedicated Server Hosting for Your Business",
  keywords:
    "colocation, colocationserver, colocationservices, colocationhosting",
};

function page() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg dedicatedServerBG">
      <NavbarInner />
      <div className="wp_img_overlayContent dedicatedIgOverlay">
        <p>Co-Location Server</p>
        <h1>High-Performance Dedicated Server Hosting for Your Business</h1>
        <span>
          Powerful and reliable dedicated servers, you can achieve
          lightning-fast website load times, high availability, and
          optimal performance
        </span>
      </div>
      <MouseContainer
        imgUrl="/image/pages/dedicatedserver/dedicatedserverimg.webp"
        width={228}
        height={347}
        clsName="wp_innerBox dsImg"
        altName="Dedicated Server"
      />
      <div
        className="ds_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <CoLocationCardPricing />
      </div>
      <div className="wpChoiceSection dedicatedBestChoice">
        <CoLocationBestChoice />
      </div>
      <div className="wp_features dedecatedFeatures">
        <CoLocationFeatures />
      </div>
      <div className="wp_plansListing">
        <CoLocationPlanListing />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 colocPose">
          <Image
            src="/image/footer_pose-1.png"
            alt="Footer Imgage"
            width={304}
            height={270}
            priority
          />
        </div>
        <svg className="bg-wave-box-end-z1" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="footer-gradient">
              <stop offset="0%" stopColor="#212433" />
              <stop offset="39%" stopColor="#242837" />
              <stop offset="100%" stopColor="#0e1019" />
            </linearGradient>
          </defs>
          <path
            fill="rgb(36,40,55)"
            d="M0,128L80,138.7C160,149,320,171,480,192C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <CoLocationFaq />
      </div>
      <Footer />
    </div>
  );
}

export default page;
