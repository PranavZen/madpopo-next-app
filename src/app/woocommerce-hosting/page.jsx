import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import WooComPriceCard from "@/components/pricecard/WooComPriceCard";
import WooCommerceChoice from "@/components/WoocommerceHostingPageComponent/WooCommerceChoice";
import WooCommerceFeatures from "@/components/WoocommerceHostingPageComponent/WooCommerceFeatures";
import WooCommercePlanListing from "@/components/WoocommerceHostingPageComponent/WooCommercePlanListing";
import WoocomerceFaq from "@/components/WoocommerceHostingPageComponent/WoocomerceFaq";

export const metadata = {
  title: "Build & Grow Your Online Store: Feature-Rich WooCommerce Hosting at MadPopo",
  alternates: {
    canonical: "https://madpopo.com/woocommerce-hosting",
  },
  description:
    "Experience seamless WooCommerce hosting with MadPopo. Automatic plugin updates, pre-configured caching, & enhanced security boost your sales. Scale your store easily with powerful plans & 24/7 expert support. Start your ecommerce journey with MadPopo!",
  keywords:
    "woocommerce, woocommerce plugin, woocommerce wordpress, woocommerce website, managed woocommerce hosting, wordpress woocommerce hosting, woocommerce website hosting, best woocommerce hosting.",
  
    openGraph: {
    url: "https://madpopo.com/woocommerce-hosting",
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
  
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
};

function WoocommerceHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg wooComBg">
      <NavbarInner />
      <div className="wp_img_overlayContent">
        <p>Woocommerce Hosting</p>
        <h1>Expertly Optimized WooCommerce Hosting for Your Online Shop</h1>
        <span>
          With lightning-fast loading times and reliable uptime, your online
          shop will always be up and running, ensuring that your customers can
          access your products.
        </span>
      </div>
      <MouseContainer
        imgUrl="/image/pages/woocomeerce/woocomimg.webp"
        width={425}
        height={374}
        clsName="wp_innerBox woocomimg"
        altName="Woocommerce Hosting"
      />
      <div
        className="woo_commSection"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <WooComPriceCard />
      </div>
      <div className="wpChoiceSection">
        <WooCommerceChoice />
      </div>
      <div className="wp_features">
        <WooCommerceFeatures />
      </div>
      <div className="wp_plansListing">
        <WooCommercePlanListing />
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
        <WoocomerceFaq />
      </div>
      <Footer />
    </div>
  );
}

export default WoocommerceHosting;
