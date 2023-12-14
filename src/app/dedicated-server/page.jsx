import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import Tabs from "@/components/servertabsbutton/Tabs";
import VsBestChoice from "@/components/VsPageComponent/VsBestChoice";
import VdsFeatures from "@/components/VirtualDedicatedServerPageComponent/VdsFeatures";
import VdsListing from "@/components/VirtualDedicatedServerPageComponent/VdsListing";
import VdsFaq from "@/components/VirtualDedicatedServerPageComponent/VdsFaq";
import TabsTwo from "@/components/servertabsbutton/TabsTwo";

export const metadata = {
  title: "Reliable Dedicated Server Hosting Solutions for Your Business",
  description:
    "Optimize your business with the best dedicated server hosting – fast, reliable, and backed by 24/7 support for smooth and secure operations.",
  keywords:
    "dedicated server, dedicated server hosting, hosted server, server hosting dedicated, server hosting, dedicated hosting, best dedicated server hosting.",
};

function page() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg dedicatedServerBG">
      <NavbarInner />
      <div className="wp_img_overlayContent dedicatedIgOverlay">
        <p>Dedicated Server</p>
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
      <TabsTwo />
      <div className="wpChoiceSection vsBestchoiceSection">
        <VsBestChoice />
      </div>
      <div className="wp_features vdsFeatures">
        <VdsFeatures />
      </div>
      <div className="wp_plansListing">
        <VdsListing />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1">
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
        <VdsFaq />
      </div>
      <Footer />
    </div>
  );
}

export default page;
