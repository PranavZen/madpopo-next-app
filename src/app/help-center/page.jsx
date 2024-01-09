import Footer from "@/components/Footer/Footer";
import HelpCenterBody from "@/components/HelpCenterPageComponent/HelpCenterBody";
import NavbarInner from "@/components/navbar/NavbarInner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title:
    "MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business",
  description:
    "Our WordPress hosting services provide top-notch performance, security, high availability, load balancing, uto-scaling and reliability for your website. With optimized servers and expert support, your website online presence will be in good hands.",
  keywords:
    "WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling",
  openGraph: {
    url: "https://madpopo.com/help-center",
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
    canonical: "https://madpopo.com/help-center/",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
};

function HelpCenter() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg careerBg">
      <NavbarInner />
      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>Help Center</h1>
            </div>
          </div>
        </div>
      </div>
      <HelpCenterBody />
      <div className="popular-topics-section pt-15 pb-md-20 pb-15 pt-lg-15 pb-lg-20 bg-default-1 position-relative contactPB">
        <div className="container">
          <div className="row justify-content-center align-items-center position-relative coodiv-z-index-2">
            <div
              className="col-11 col-md-9 col-lg-9 order-lg-1 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="hero-content mt-11 mt-lg-0 mb-20">
                <h4 className="title coodiv-text-5 mb-5 text-center">
                  Or you can see Popular Topics
                </h4>
                <p className="coodiv-text-9 mb-11 text-center">
                  Our extraordinary Technical Support and Customer Service is
                  one of the main reasons why our clients rate us as the number.
                </p>
              </div>
            </div>
          </div>
          <div className="popular-topics row align-items-center justify-content-center mt-n5">
            <div className="col-lg-3 col-md-6">
              <div className="popular-topics-box bg-default-2 rounded-20 px-8 py-8 mb-4">
                <i className="feather icon-server color-blackish-blue coodiv-text-5 d-block mb-2"></i>
                <h5 className="coodiv-text-9 mb-3">
                  Shared Hosting departement
                </h5>
                <Link
                  className="coodiv-text-11 font-weight-bold mt-8 d-flex justify-content-between"
                  href="#"
                >
                  Open a ticket{" "}
                  <i className="ml-2 fa fa-chevron-circle-right coodiv-text-7"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="popular-topics-box bg-default-2 rounded-20 px-8 py-8 mb-4">
                <i className="feather icon-anchor color-blackish-blue coodiv-text-5 d-block mb-2"></i>
                <h5 className="coodiv-text-9 mb-3">
                  Advanced Topics &amp; Customization
                </h5>
                <Link
                  className="coodiv-text-11 font-weight-bold mt-8 d-flex justify-content-between"
                  href="#"
                >
                  Open a ticket{" "}
                  <i className="ml-2 fa fa-chevron-circle-right coodiv-text-7"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="popular-topics-box bg-default-2 rounded-20 px-8 py-8 mb-4">
                <i className="feather icon-credit-card color-blackish-blue coodiv-text-5 d-block mb-2"></i>
                <h5 className="coodiv-text-9 mb-3">
                  Account Management &amp; Billing
                </h5>
                <Link
                  className="coodiv-text-11 font-weight-bold mt-8 d-flex justify-content-between"
                  href="#"
                >
                  Open a ticket{" "}
                  <i className="ml-2 fa fa-chevron-circle-right coodiv-text-7"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="popular-topics-box bg-default-2 rounded-20 px-8 py-8 mb-4">
                <i className="feather icon-package color-blackish-blue coodiv-text-5 d-block mb-2"></i>
                <h5 className="coodiv-text-9 mb-3">
                  One-Click Installs &amp; 3rd-Party Apps
                </h5>
                <Link
                  className="coodiv-text-11 font-weight-bold mt-8 d-flex justify-content-between"
                  href="#"
                >
                  Open a ticket{" "}
                  <i className="ml-2 fa fa-chevron-circle-right coodiv-text-7"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wp_hostingFaqSection">
        <div className="pose_1 helpcenterPose">
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
      </div>
      <Footer />
    </div>
  );
}

export default HelpCenter;
