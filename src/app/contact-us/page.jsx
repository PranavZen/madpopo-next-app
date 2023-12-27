import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/contactformcomponent/ContactForm";
import NavbarInner from "@/components/navbar/NavbarInner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title:
    "Please contact us at Madpopo.com for any assistance or guidance you may need",
  description:
    "Secure your online identity with our seamless domain registration services. Experience a smooth process, expert support, and competitive pricing at MadPopo.",
  keywords:
    "WordPress hosting, woo commerce, windows web hosting, web hosting, virtual server, dedicated server, business email hosting, reseller hosting, SSL certificate, whois checker, whois domain lookup, e-commerce hosting, co-location server, Cpanel, Plesk, performance, security, reliability, Windows hosting, scalability, .NET Framework, MS SQL Hosting, ASP support, Linux web hosting, affordability, reliability, Apache, PHP, MySQL, Cloud server hosting, high availability, load balancing, auto-scaling, contact, contact us",
  openGraph: {
    url: "https://next.madpopo.com/contact-us",
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
    <div className="site-wrapper overflow-hidden wp_hostingBgImg contactBgImg">
      <NavbarInner />

      <div className="contact-form-container contatc_mt">
        <div className="container">
          <div className="tc_TitleOverlay">
            <h1>Contact Us</h1>
          </div>
          <div className="row justify-content-center pb-10 position-relative coodiv-z-index-2">
            <div className="col-md-12 col-lg-8">
              <ContactForm />
            </div>
            <div className="col-md-12 col-lg-4 px-lg-0 mt-lg-0 mt-10">
              <div className="features-box-3 px-5 py-5 border-opacity position-relative white-bg rounded-20 bg-white shadow-2 coodiv-z-index-2">
                <div className="col-md-12 text-left px-8 pb-8 pt-5 d-flex justify-content-start align-items-center border-bottom-separate">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-phone-call"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">Sales</h5>
                    <p className="coodiv-text-11 mb-0">+91 7039 003 001</p>
                  </div>
                </div>
                <div className="col-md-12 text-left px-8 pb-8 pt-5 d-flex justify-content-start align-items-center border-bottom-separate">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-mail"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">Email us</h5>
                    <p className="coodiv-text-11 mb-0">
                      sales@madpopo.com <br />
                      support@madpopo.com
                    </p>
                  </div>
                </div>
                <div className="col-md-12 text-left px-8 pb-8 pt-5 d-flex justify-content-start align-items-center border-bottom-separate">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-mail"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">Office timing</h5>
                    <p className="coodiv-text-11 mb-0">
                      Monday to Saturday
                      <br />
                      10.00 AM - 07.00 PM
                    </p>
                  </div>
                </div>
                <div className="col-md-12 text-left px-8 pb-8 pt-5 d-flex justify-content-start align-items-center border-bottom-separate">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-map"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">Visit our office</h5>
                    <p className="coodiv-text-11 mb-0">
                      607/608, Pranik Chamber, Saki Vihar Road, Sakinaka Metro,
                      Andheri East, Mumbai 400072, India
                    </p>
                  </div>
                </div>

                <div className="col-md-12 text-left px-8 pb-8 pt-7 d-flex justify-content-start align-items-center">
                  <div className="widget-icon circle-sm-2 bg-white coodiv-text-6 text-primary mr-7">
                    <i className="feather icon-share-2"></i>
                  </div>
                  <div>
                    <h5 className="coodiv-text-8 mb-0">
                      Follow us in Social Media
                    </h5>
                    <div className="social-numbers contact-page d-flex mt-3 gap3">
                      <a
                        className=" tw"
                        href="https://www.facebook.com/madpopowp?mibextid=ZbWKwL"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a className="tw" href="https://twitter.com/madpopowp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="24px"
                          clipRule="evenodd"
                          baseProfile="basic"
                        >
                          <polygon
                            fill="#379ff6"
                            points="41,6 9.929,42 6.215,42 37.287,6"
                          />
                          <polygon
                            fill="#379ff6"
                            fillRule="evenodd"
                            points="31.143,41 7.82,7 16.777,7 40.1,41"
                            clipRule="evenodd"
                          />
                          <path
                            fill="#379ff6"
                            d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
                          />
                        </svg>
                      </a>
                      <a
                        className="tw"
                        href="https://www.linkedin.com/company/madpopowp"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a
                        className="tw"
                        href="https://www.instagram.com/madpopowp/?igshid=MDM4ZDc5MmU="
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="onlineChatBotWrapper">
        <div className="container">
          <div className="sectionTitle">
            <h4>Reach out to Madpopo</h4>
            <p>Whenever you need us, please do not hesitate to contact us</p>
          </div>
          <div className="onlineChatRow">
            <div className="col-md-4">
              <div className="chatBoxOuter">
                <div className="boxCenterIconWrap">
                  <span>
                    <Image
                      src="/image/pages/contact/madpopo_chat.png"
                      alt="Chat online"
                      width={65}
                      height={65}
                      priority
                    />
                  </span>
                </div>
                <div className="ChatBoxInner">
                  <div className="boxTitle">
                    <h6>Chat online</h6>
                    <p>Get Madpopo to help with your questions</p>
                  </div>
                  <div className="responsiveTimeBox">
                    <span>response time</span>
                    <p>less than a minute</p>
                  </div>
                  <div className="btnWrap">
                    <button className="btn">Let's talk</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="chatBoxOuter">
                <div className="boxCenterIconWrap">
                  <span>
                    <Image
                      src="/image/pages/contact/madpopo_email.png"
                      alt="Send an email"
                      width={65}
                      height={65}
                      priority
                    />
                  </span>
                </div>
                <div className="ChatBoxInner">
                  <div className="boxTitle">
                    <h6>Send an email</h6>
                    <p>We will respond as soon as possible to your email</p>
                  </div>
                  <div className="responsiveTimeBox">
                    <span>response time</span>
                    <p>8-9 hours</p>
                  </div>
                  <div className="btnWrap">
                    <Link
                      href="mailto: mailto:support@madpopo.com"
                      className="btn"
                    >
                      Email us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wp_hostingFaqSection contPT">
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
