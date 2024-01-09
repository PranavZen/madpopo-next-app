import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import CpanelChoice from "@/components/cPanel/CpanelChoice";
import CpanelFaq from "@/components/cPanel/CpanelFaq";
import CpanelFeatures from "@/components/cPanel/CpanelFeatures";
import CpanelListing from "@/components/cPanel/CpanelListing";
import NavbarInner from "@/components/navbar/NavbarInner";
import CpanelPricingCard from "@/components/pricecard/CpanelPricingCard";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "CPanel: The Best Web Hosting Control Panel",
  description:
    "Select a flexible pricing plan for cPanel, the best web hosting control panel. User-friendly and intuitive, it simplifies website management for domains, files, databases, and more.",
  keywords: "cpanel, cpanelhosting, cpanelhost, bestcpanelhost",
  openGraph: {
    url: "https://madpopo.com/cpanel-whm-hosting-panel",
    type: "website",
    images: [
      {
        url: "https://madpopo.com/image/madpopo-hosting.jpg",
        width: 1200,
        height: 675,
        type: "image/jpg",
      },
    ],
  },
  alternates: {
    canonical: "https://madpopo.com/cpanel-whm-hosting-panel/",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
};

function CpanelHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg cpanelBG">
      <NavbarInner />

      <div className="wp_img_overlayContent vdsImgOverlay cpanelOverlay">
        <p>cPanel</p>
        <h1>Choose flexible pricing plan for you and more...</h1>
        <span>Unlimited boards and workflows. no credit card needed</span>
      </div>
      <MouseContainer
        imgUrl="/image/pages/virtualserver/cloud-server.webp"
        width={349}
        height={331}
        clsName="wp_innerBox vdsImg"
        altName="cPanel"
      />
      <div
        className="vds_pricingBox container px-0 cpanelBox"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <CpanelPricingCard />
      </div>

      <div className="wpChoiceSection">
        <CpanelChoice />
      </div>

      <div className="wp_features vdsFeatures">
        <CpanelFeatures />
      </div>
      <div className="wp_plansListing">
        <CpanelListing />
      </div>

      <div className="wp_hostingFaqSection">
        <div className="pose_1 cpanelPose">
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
        <CpanelFaq />
      </div>
      <Footer />
    </div>
  );
}

export default CpanelHosting;
