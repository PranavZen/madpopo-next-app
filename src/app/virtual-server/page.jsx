
import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import WindowsTabContent from "@/components/tabs/tabcontentbox/WindowsTabContent";
import WindowsBestChoice from "@/components/WindowsHostingPageComponent/WindowsBestChoice";
import WindowsHostingFeatures from "@/components/WindowsHostingPageComponent/WindowsHostingFeatures";
import WindowsPlansHosting from "@/components/WindowsHostingPageComponent/WindowsPlansHosting";
import WindowsHostingFaq from "@/components/WindowsHostingPageComponent/WindowsHostingFaq";
import Tabs from "@/components/servertabsbutton/Tabs";

export const metadata = {
  title: "Cloud Server",
  description:
    "Explore MadPopo's high-performance web hosting featuring WordPress, Windows, Linux, ASP support, and Cloud servers for top-tier security and reliability.",
};

function page() {
 
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg windowsBG">
      <NavbarInner />
      <div className="wp_img_overlayContent vdsImgOverlay ">
        <p>Cloud Server</p>
        <h1>Fast and Secure Cloud Servers for Your Business Needs</h1>
        <span>
          Get more hosting for a lower price.Take advantage of your hosting
          plan's increased security and management at a reasonable cost.
        </span>
      </div>
      <MouseContainer
        imgUrl="/image/pages/windows/windows-object.webp"
        width={395}
        height={375}
        clsName="wp_innerBox windowsImg"
      />
      <Tabs/>
      <div className="wpChoiceSection">
        <WindowsBestChoice />
      </div>
      <div className="wp_features">
        <WindowsHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <WindowsPlansHosting />
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
        <WindowsHostingFaq />
      </div>
      <Footer />
    </div>
  );
}

export default page;