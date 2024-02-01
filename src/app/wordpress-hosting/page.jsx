import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import WordpressHostingPriceCard from "@/components/wordpresshostingcomponents/WordpressHostingPriceCard";
import WpBestChoice from "@/components/wordpresshostingcomponents/WpBestChoice";
import WordpressHostingFeatures from "@/components/wordpresshostingcomponents/WordpressHostingFeatures";
import WordpressPlansListing from "@/components/wordpresshostingcomponents/WordpressPlansListing";
import WordpressHostingFAQ from "@/components/wordpresshostingcomponents/WordpressHostingFAQ";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";

export const metadata = {
  title: "Reliable, Secure, & Fast: WordPress Hosting Made Easy by MadPopo",
  description:
    "Get reliable, secure, & lightning-fast WordPress hosting at MadPopo. Scalable plans & exceptional support to power your website. Get Started Today!",
  keywords:
    "wordpress hosting, best wordpress hosting, wordpress domain, wordpress plans wp hosting, managed wordpress hosting, fastest wordpress hosting, managed wordpress, wordpress website hosting, best web hosting for wordpress, wordpress server, wordpress web hosting, wordpress hosting plans",
  openGraph: {
    url: "https://madpopo.com/wordpress-hosting",
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
    canonical: "https://madpopo.com/wordpress-hosting",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
};

function WordpressHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg">
      <NavbarInner />
      <div className="wp_img_overlayContent">
        <p>Wordpress Hosting</p>
        <h1>
          Efficient and Reliable WordPress Hosting Solutions for Your Website
        </h1>
        <span>
          Our team of experts will handle all the technical details, so you can
          focus on growing your business. Trust us to provide the best possible
          WordPress hosting solutions for your website
        </span>
      </div>
      <MouseContainer
        imgUrl="/image/wordpress_innerlogo.png"
        width={684}
        height={684}
        clsName="wp_innerBox"
        altName="Wordpress Hosting"
      />
      <div
        className="wp_pricingBox"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <WordpressHostingPriceCard />
      </div>
      <div className="wpChoiceSection">
        <WpBestChoice />
      </div>
      <div className="wp_features">
        <WordpressHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <WordpressPlansListing />
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
        <WordpressHostingFAQ />
      </div>
      <Footer />
    </div>
  );
}

export default WordpressHosting;
