import Footer from "@/components/Footer/Footer";
import TrustedClientsSlide from "@/components/TrustedClients/TrustedClientsSlide";
import NavbarInner from "@/components/navbar/NavbarInner";
import Image from "next/image";
import React from "react";

export const metadata = {
  title:
    "MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business",
  description:
    "Secure your online identity with our seamless domain registration services. Experience a smooth process, expert support, and competitive pricing at MadPopo.",
  keywords:
    "WordPress hosting, web hosting, performance, security, reliability, Windows hosting, scalability, .NET framework, MS SQL Hosting, ASP support, Linux hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling",
  openGraph: {
    url: "https://next.madpopo.com/happy-customer",
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
    <div className="site-wrapper overflow-hidden wp_hostingBgImg termsConditionBg">
      <NavbarInner />
      <div className="container">
        <div className="tc_TitleOverlay">
          <h1>Happy Customers</h1>
        </div>
      </div>

      <div
        className="trusedPlanSection happyCust"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <TrustedClientsSlide />
      </div>

      <div className="wp_hostingFaqSection">
        <div className="pose_1 happyPose">
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

export default page;
