import React from "react";
import Footer from "@/components/Footer/Footer";
import NavbarInner from "@/components/navbar/NavbarInner";
import WhoisCheckerBestChoice from "@/components/WhoisCheckerPageComponent/WhoisCheckerBestChoice";
import CheckerApp from "@/components/WhoisCheckerPageComponent/CheckerApp";
import WhoisCheckerFaq from "@/components/WhoisCheckerPageComponent/WhoisCheckerFaq";
import CheckerPlans from "@/components/WhoisCheckerPageComponent/CheckerPlans";
import Image from "next/image";

export const metadata = {
  title: "Get Accurate Domain Info with WHOIS Domain Lookup",
  description:
    "Get detailed information about any domain name with WHOIS Domain Lookup. Discover website ownership with our WHOIS Domain Lookup tool. Uncover the details of a website's owner quickly and easily.",
  keywords:
    "whois, whois lookup, whois domain, whois domain lookup, whois domain tools, whois lookup, whois domain hosting",
  openGraph: {
    url: "https://madpopo.com/whois-checker",
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
    canonical: "https://madpopo.com/whois-checker",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
};

function WhoIsChecker() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg careerBg">
      <NavbarInner />
      <div className="gb_infraWrap">
        <div className="container">
          <div className="gb_top_para">
            <div className="gb_pageTitle">
              <h1>Whois Checker</h1>
            </div>
          </div>
        </div>
      </div>
      <section id="whoisChecker">
        <div className="sectionTitle">
          <h4>WHOIS Domain Lookup</h4>
          <h2>Find out who owns a website</h2>
        </div>
        <CheckerApp />
      </section>
      <div className="wpChoiceSection ">
        <WhoisCheckerBestChoice />
      </div>
      <CheckerPlans />
      <div className="wp_hostingFaqSection">
        <div className="pose_1 whoisPose">
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
        <WhoisCheckerFaq />
      </div>
      <Footer />
    </div>
  );
}

export default WhoIsChecker;
