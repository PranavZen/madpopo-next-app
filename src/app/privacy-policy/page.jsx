import React from "react";
import Footer from "@/components/Footer/Footer";
import PrivacyDataList from "@/components/PrivacyPolicyPageComponent/PrivacyDataList";
import NavbarInner from "@/components/navbar/NavbarInner";
import Image from "next/image";

export const metadata = {
  title:
    "MadPopo Best Hosting Solution which is Secure, Scalable, Reliable and Affordable for your Online Business",
  description:
    "Automatic DDoS protection is included with every server and webspace package—no additional steps needed. Benefit from our in-house DDoS protection provided to all customers.",
  keywords:
    "ddoDDoS, DDOS protection, distributed denial of service, DDoS website",
  openGraph: {
    url: "https://madpopo.com/privacy-policy",
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

function PrivacyPolicy() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg privacyBg">
      <NavbarInner />

      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>

      <section className="privacySection" id="privacySection">
        <PrivacyDataList />
      </section>

      <div className="wp_hostingFaqSection">
        <div className="pose_1 gb_fooPose">
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

export default PrivacyPolicy;
