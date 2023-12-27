import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import SecondTabContent from "@/components/tabs/tabcontentbox/SecondTabContent";
import LinuxBestChoice from "@/components/LinuxHostingPageComponent/LinuxBestChoice";
import LinuxHostingFeatures from "@/components/LinuxHostingPageComponent/LinuxHostingFeatures";
import LinuxHostingPlans from "@/components/LinuxHostingPageComponent/LinuxHostingPlans";
import LinuxFaq from "@/components/LinuxHostingPageComponent/LinuxFaq";

export const metadata = {
  title: "Fast & Reliable Linux Web Hosting Solutions",
  description:
    "Experience fast, reliable Linux hosting with cutting-edge technology. Our optimized servers ensure hassle-free, secure, and reliable performance for peace of mind.",
  keywords:
    "linux hosting, linux web hosting, hosting a website on linux, linux hosting server, linux shared hosting, best linux hosting",
  openGraph: {
    url: "https://next.madpopo.com/linux-web-hosting",
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
    <div className="site-wrapper overflow-hidden wp_hostingBgImg linuxBG">
      <NavbarInner />
      <div className="wp_img_overlayContent linux_img_overlay">
        <p>Linux Web Hosting</p>
        <h1>Powerful Linux Hosting Plans for Smooth & Efficient Web Portal </h1>
        <span>
          With a focus on smooth and efficient website operations, our hosting
          plans are tailored to meet the demands of businesses of all size
        </span>
      </div>
      <MouseContainer
        imgUrl="/image/pages/linuxwebhosting/linux-hosting.webp"
        width={349}
        height={343}
        clsName="wp_innerBox linuxrightimgBox"
        altName="Linux Web Hosting"
      />
      <div
        className="linux_pricingBox container"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <SecondTabContent />
      </div>
      <div className="wpChoiceSection">
        <LinuxBestChoice />
      </div>
      <div className="wp_features linuxFeature">
        <LinuxHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <LinuxHostingPlans />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1">
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
        <LinuxFaq />
      </div>
      <Footer />
    </div>
  );
}

export default page;
