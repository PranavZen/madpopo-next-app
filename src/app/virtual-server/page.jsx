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

export const metadata = {
  title: "High Performance Virtual Dedicated Server Solutions",
  description:
    "Experience the best performance for your workloads with our reliable and high-performance virtual dedicated server solutions. Various options with 24/7 support.",
  keywords:
    "virtual server, vds, virtual hosting, virtual dedicated server, virtualserver, virtual dedicated hosting",
  openGraph: {
    url: "https://next.madpopo.com/virtual-server",
    type: "website",
    images: [
      {
        url: "https://next.madpopo.com/image/madpopo-hosting.jpg",
        width: 1200,
        height: 675,
        type: "image/jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://next.madpopo.com/image/madpopo-hosting.jpg",
  },
};

function page() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg vdsBG">
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
        imgUrl="/image/pages/virtualserver/cloud-server.webp"
        width={349}
        height={331}
        clsName="wp_innerBox vdsImg"
        altName="Cloud Server"
      />
      <Tabs />
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
        <div className="pose_1 vdsPose">
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
        <VdsFaq />
      </div>
      <Footer />
    </div>
  );
}

export default page;
