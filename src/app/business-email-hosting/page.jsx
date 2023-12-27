import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import BusinessEmailComponent from "@/components/tabs/tabcontentbox/hostingpalndata/BusinessEmailComponent";
import BusinessBestChoices from "@/components/BuisnessEmailPageComponent/BusinessBestChoices";
import BuisnessEmailFeatures from "@/components/BuisnessEmailPageComponent/BuisnessEmailFeatures";
import BuisnessEmailPalnsListing from "@/components/BuisnessEmailPageComponent/BuisnessEmailPalnsListing";
import BuisnessFaq from "@/components/BuisnessEmailPageComponent/BuisnessFaq";

export const metadata = {
  title:
    "Find the Best Email Hosting Provider & Enjoy Seamless Email Experience",
  description:
    "Get the best email hosting experience. Enjoy secure, reliable, and fast communication with advanced security, 24/7 support, and unlimited storage.",
  keywords:
    "email hosting, best email provider, emailhosting, businessemail, create business email, professional business email, small business email, email host providers, custom email domain, best email for business, webmail email hosting",
  openGraph: {
    url: "https://next.madpopo.com/business-email-hosting",
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
    <div className="site-wrapper overflow-hidden wp_hostingBgImg businessBG">
      <NavbarInner />
      <div className="wp_img_overlayContent businessImgOverlay">
        <p>Business Email Hosting</p>
        <h1>Business-Class Email Hosting for Enhanced Communication </h1>
        <span>
          We offer a variety of options to fit your specific needs, including
          GSuite, Office 365, and our own email solution
        </span>
      </div>
      <MouseContainer
        imgUrl="/image/pages/businessemail/besrightimg.webp"
        width={562}
        height={356}
        clsName="wp_innerBox buis_innerBox"
        altName="Business Email Hosting"
      />
      <div
        className="cloudHost_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <BusinessEmailComponent />
      </div>
      <div className="wpChoiceSection businessBeChoice">
        <BusinessBestChoices />
      </div>
      <div className="wp_features businessFeatures">
        <BuisnessEmailFeatures />
      </div>
      <div className="wp_plansListing">
        <BuisnessEmailPalnsListing />
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 buisnessPose">
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
        <BuisnessFaq />
      </div>
      <Footer />
    </div>
  );
}

export default page;
