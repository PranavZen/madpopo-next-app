import React from "react";
import NavbarInner from "@/components/navbar/NavbarInner";

import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import WindowsTabContent from "@/components/tabs/tabcontentbox/WindowsTabContent";
import WindowsBestChoice from "@/components/WindowsHostingPageComponent/WindowsBestChoice";
import WindowsHostingFeatures from "@/components/WindowsHostingPageComponent/WindowsHostingFeatures";
import WindowsPlansHosting from "@/components/WindowsHostingPageComponent/WindowsPlansHosting";
import WindowsHostingFaq from "@/components/WindowsHostingPageComponent/WindowsHostingFaq";

export const metadata = {
  title: "Power Up Your Windows Apps: Blazing-Fast & Secure Hosting with MadPopo",
  description:
    "Run .NET, ASP.NET, & MSSQL flawlessly with MadPopo’s optimized Windows hosting. Dedicated resources, SSD storage, & 99.9% uptime guarantee ensure peak performance. Choose MadPopo & unlock the full potential of your Windows applications!",
  keywords:
    "web servers host, windows hosting server, windows hosting, windows server hosting,win host, windows server website hosting, windows shared server, windows website hosting,web hosting windows, hosting windows, windows shared hosting, best windows hosting, windows website hosting.",
  openGraph: {
    url: "https://madpopo.com/windows-hosting",
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
    canonical: "https://madpopo.com/windows-hosting/",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
};

function WindowsHosting() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg windowsBG">
      <NavbarInner />
      <div className="wp_img_overlayContent winOverlay">
        <p>Windows Web Hosting</p>
        <h1>Robust and High-Performance Windows Server Hosting</h1>
        <span>
          Our servers are optimized to deliver high performance, making them
          perfect for running .NET applications and utilizing SQL
          Server databases
        </span>
      </div>
      <MouseContainer
        imgUrl="/image/pages/windows/windows-object.webp"
        width={395}
        height={375}
        clsName="wp_innerBox windowsImg"
        altName="Windows Web Hosting"
      />
      <div
        className="windows_pricingBox container px-0"
        data-aos="zoom-in"
        data-aos-duration="2200"
      >
        <WindowsTabContent />
      </div>
      <div className="wpChoiceSection">
        <WindowsBestChoice />
      </div>
      <div className="wp_features">
        <WindowsHostingFeatures />
      </div>
      <div className="wp_plansListing">
        <WindowsPlansHosting />
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
        <WindowsHostingFaq />
      </div>
      <Footer />
    </div>
  );
}

export default WindowsHosting;
