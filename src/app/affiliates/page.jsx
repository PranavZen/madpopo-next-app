import React from "react";
import AffiliateFaq from "@/components/AffiliatePageComponents/AffiliateFaq";
import AffiliateFeaturesSection from "@/components/AffiliatePageComponents/AffiliateFeaturesSection";
import AffiliateSecondSection from "@/components/AffiliatePageComponents/AffiliateSecondSection";
import AffiliateThirdSection from "@/components/AffiliatePageComponents/AffiliateThirdSection";
import Footer from "@/components/Footer/Footer";
import MouseContainer from "@/components/MouseContainer";
import NavbarInner from "@/components/navbar/NavbarInner";
import Image from "next/image";

export const metadata = {
  title:
    "Earn Easy Income & Promote Top-Tier Web Hosting: Join MadPopo’s Affiliate Program",
  description:
    "Turn your passion for technology into profit! MadPopo’s affiliate program offers 20% commission & powerful tools to promote their trusted web hosting solutions. Join now & start earning on every referral!",
  keywords:
    "linux hosting, linux web hosting, hosting a website on linux, linux hosting server, linux shared hosting, best linux hosting",
  openGraph: {
    url: "https://madpopo.com/affiliates",
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
    canonical: "https://madpopo.com/affiliates",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@madpopowp",
    site: "@madpopowp",
    image: "https://madpopo.com/image/madpopo-hosting.jpg",
  },
};
function AffiliatePage() {
  return (
    <div className="site-wrapper overflow-hidden wp_hostingBgImg affiliateBG">
      <NavbarInner />

      <div className="wp_img_overlayContent linux_img_overlay AffiliatesImgOverlay">
        <p>MadPopo Affiliate Program</p>
        <h1>
          Earn 20% of your every sale. Promote a trusted service loved by
          millions
        </h1>
        <div className="affiliateBtnWrap">
          <a
            href="https://my.madpopo.com/login"
            className="btn btn-orange coodiv-hover-y w-25 mt-9 coodiv-text-9 "
            target="_blank"
            rel="noreferrer"
          >
            Sign In
          </a>
          <a
            href="https://my.madpopo.com/register.php"
            className="btn btn-transperant coodiv-hover-y w-25 mt-9 coodiv-text-9 "
            target="_blank"
            rel="noreferrer"
          >
            Sign Up
          </a>
        </div>
        <p className="color-blackish-blue-opacity coodiv-text-10 d-lg-flex align-items-center justify-content-center">
          Join an affiliate program that values your partnership
        </p>
        <div className="reviews-overview text-center mt-9 mb-0  topRating">
          <p className="rataingWrapes color-blackish-blue-opacity coodiv-text-10 d-lg-flex align-items-center justify-content-center mb-0">
            MadPopo<strong>is rated</strong> Excellent
            <span className="reviews-stars mx-3 mt-0">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
            4.89 out of<strong>5</strong>
          </p>
        </div>
      </div>

      <MouseContainer
        imgUrl="/image/pages/affiliateBanner.png"
        width={349}
        height={333}
        clsName="wp_innerBox linuxrightimgBox"
        altName="MadPopo Affiliate Program"
      />

      <section className="secondAffiliateSection">
        <AffiliateSecondSection />
      </section>

      <div className="wpChoiceSection">
        <AffiliateThirdSection />
      </div>

      <div className="wp_features linuxFeature affilFeature">
        <AffiliateFeaturesSection />
      </div>

      <div className="wp_hostingFaqSection affilFaq">
        <div className="pose_1 linuxPose">
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
        <AffiliateFaq />
      </div>
      <Footer />
    </div>
  );
}

export default AffiliatePage;
