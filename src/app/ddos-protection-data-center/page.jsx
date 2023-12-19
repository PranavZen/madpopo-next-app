import DdosFaq from "@/components/DdosPageComponent/DdosFaq";
import Footer from "@/components/Footer/Footer";
import NavbarInner from "@/components/navbar/NavbarInner";
import Image from "next/image";
import React from "react";

export const metadata = {
    title: "Keep Your Network Safe with Advanced DDOS Protection Solutions",
    description:
      "Automatic DDoS protection is included with every server and webspace package—no additional steps needed. Benefit from our in-house DDoS protection provided to all customers.",
    keywords: "ddoDDoS, DDOS protection, distributed denial of service, DDoS website",
  };

function page() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg ddosBg">
      <NavbarInner />
      <div className="container">
        <div className="tc_TitleOverlay">
          <h1>DDoS Protection</h1>
        </div>
        <div className="ddosWrap">
          <div className="ddosParaWrap">
            <p>
              DDoS (Distributed Denial of Service) attacks refer to the
              deliberate overloading of a server or a service with a high volume
              of often useless requests, with the goal of rendering it
              inaccessible to legitimate users. When a DDoS attack occurs, the
              server or service becomes overwhelmed and unable to handle the
              flood of requests, which disrupts the normal functioning of the
              system and causes it to crash or become unavailable.
            </p>
            <p>
              Unfortunately, DDoS attacks are becoming more frequent and
              sophisticated, posing a serious threat to businesses and
              organizations that rely on the Internet for their operations.
              MadPopo, like many other hosting providers, has witnessed an
              increase in the number of DDoS attacks targeting its customers'
              servers. These attacks can cause significant downtime and lost
              revenue for businesses, which is why it's essential to have
              effective DDoS protection in place.
            </p>
            <p>
              To safeguard its customers' servers from DDoS attacks, MadPopo has
              developed an in-house DDoS protection system. This protection is
              available free of charge for all of MadPopo's customers, and it's
              automatically activated for all servers and webspace packages. The
              system works by detecting and filtering out DDoS traffic before it
              reaches the customer's server, thereby ensuring that the server
              remains available to legitimate users even during an attack.
            </p>
            <p>
              In conclusion, DDoS attacks are a serious threat to businesses and
              organizations that rely on the Internet, and MadPopo's in-house
              DDoS protection system is a crucial tool for mitigating the impact
              of these attacks. By offering this protection for free to all
              customers, MadPopo is helping to ensure that businesses can
              continue to operate online without interruption or loss of
              revenue.
            </p>
          </div>
        </div>
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
        <DdosFaq />
      </div>
      <Footer />
    </div>
  );
}

export default page;
