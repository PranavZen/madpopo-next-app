import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import ResellerHostingComponent from "@/components/tabs/tabcontentbox/hostingpalndata/ResellerHostingComponent";
import ResellerBestChoices from "@/components/ResellerHostingPageComponent/ResellerBestChoices";
import ResellerHostingFeatures from "@/components/ResellerHostingPageComponent/ResellerHostingFeatures";
import ResellerHosingPlansListing from "@/components/ResellerHostingPageComponent/ResellerHosingPlansListing";
import ResellerHostingFaq from "@/components/ResellerHostingPageComponent/ResellerHostingFaq";

export const metadata = {
  title: "Affordable Reseller Hosting Plans for Maximum Profitability",
  description:
    "Maximize profitability with our reseller hosting plans. Enjoy reliable, secure services, backed by 24/7 customer support and a 99.9% uptime guarantee.",
  keywords:
    "hosting for resellers, reseller hosting, domain reseller, best reseller hosting, reseller web hosting, reseller website, reseller web.",
};

function page() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg resellerBG">
      <NavbarInner />
      <div className="wp_img_overlayContent resellerOverlay">
        <p>Reseller Hosting</p>
        <h1>The Ideal Solution for Web Designers and Developers </h1>
        <span>
          An ideal solution for web designers and developers who want to expand
          their offerings and provide hosting services to their clients
        </span>
      </div>
      {/* <MouseContainer
        imgUrl="/image/pages/businessemail/besrightimg.webp"
        width={562}
        height={356}
        clsName="wp_innerBox buis_innerBox"
        altName="Business Email Hosting"
      /> */}
      <div
        className="resellerHosting_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <ResellerHostingComponent />
      </div>
      <div className="wpChoiceSection resellerBeChoice">
        <ResellerBestChoices />
      </div>
      <div className="wp_features">
        <ResellerHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <ResellerHosingPlansListing />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 resellPose">
          <Image
            src="/image/footer_pose-1.png"
            alt="Footer Imgage"
            width={304}
            height={270}
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
        <ResellerHostingFaq />
      </div>
      <Footer />
    </div>
  );
}

export default page;
