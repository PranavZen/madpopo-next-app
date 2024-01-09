import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import TabsThree from "@/components/servertabsbutton/TabsThree";
import PleskChoice from "@/components/PleskPageComponent/PleskChoice";
import PleskFeatures from "@/components/PleskPageComponent/PleskFeatures";
import PleskPlansListing from "@/components/PleskPageComponent/PleskPlansListing";
import PleskFaq from "@/components/PleskPageComponent/PleskFaq";

export const metadata = {
  title: "Easily Manage Your Websites with Plesk Hosting Solutions",
  description:
    "Plesk; Leading web hosting control panel for simple and secure website management. Enjoy easy setup, powerful features, reliable performance, and advanced security solutions.",
  keywords: "plesk, pleskpanel, pleskpricing, installingplesk, pleskhosting",
  openGraph: {
    url: "https://madpopo.com/plesk-hosting-panel",
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
    canonical: "https://madpopo.com/plesk-hosting-panel/",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
};

function PleskHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg windowsBG">
      <NavbarInner />
      <div className="wp_img_overlayContent">
        <p>Plesk</p>
        <h1>Choose flexible pricing plan for you and more...</h1>
        <span>Unlimited boards and workflows. no credit card needed</span>
      </div>
      <MouseContainer
        imgUrl="/image/pages/windows/windows-object.webp"
        width={395}
        height={375}
        clsName="wp_innerBox windowsImg"
        altName="Windows Web Hosting"
      />
      <TabsThree />
      <div className="wpChoiceSection">
        <PleskChoice />
      </div>
      <div className="wp_features">
        <PleskFeatures />
      </div>
      <div className="wp_plansListing">
        <PleskPlansListing />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 pleskPose">
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
        <PleskFaq />
      </div>
      <Footer />
    </div>
  );
}

export default PleskHosting;
