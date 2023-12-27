"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "font-awesome/css/font-awesome.min.css";
import { NavHashLink } from "react-router-hash-link";

function Footer() {
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <div className="dark-mode-texts footer-gradient-default overflow-hidden position-relative madPopoEl">
      <svg className="bg-wave-box-end" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L80,101.3C160,139,320,213,480,213.3C640,213,800,139,960,117.3C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="container">
        <div className="footer-section dark-mode-texts">
          <div className="container">
            <div className="footer-top pb-lg-19">
              <div className="row">
                <div className="col-12 col-lg-3">
                  <div className="footer-block mb-13 mb-lg-9">
                    <div className="brand-logo mb-7">
                      <Link href="/" ref={scrollRef} onClick={scrollToTop}>
                        <Image
                          src="/image/header/madpopo-white-logo.svg"
                          alt="MadPopo Logo"
                          className="dark-version-logo"
                          width={162}
                          height={77}
                          priority
                        />
                      </Link>
                    </div>
                    <ul className="footer-contact-list list-unstyled">
                      <li>
                        <span className="badge coodiv-badge badge-warning rounded-pill coodiv-text-12 position-relative">
                          <i className="fa fa-envelope"></i> mail@madpopo.com
                        </span>
                      </li>
                      <li>
                        <span className="badge coodiv-badge badge badge-info rounded-pill coodiv-text-12 position-relative">
                          <i className="fa fa-phone"></i> +91 7039 003 001
                        </span>
                      </li>
                    </ul>
                    <p className="coodiv-text-11 pr-lg-10">
                      MadPopo offers superior, reliable and affordable WordPress
                      Managed Hosting to individuals and small businesses.
                    </p>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Our Hosting
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/wordpress-hosting"
                          title="WordPress Hosting"
                        >
                          WordPress Hosting
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/windows-hosting"
                          title="Windows Hosting"
                        >
                          Windows Hosting
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/woocommerce-hosting"
                          title="E-Commerce Hosting"
                        >
                          E-Commerce Hosting
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-9">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Server Services
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/virtual-server"
                          title="Virtual Server"
                        >
                          Virtual Server
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/dedicated-server"
                          title="Dedicated Server"
                        >
                          Dedicated Server
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/colocation-server"
                          title="Co-Location Server"
                        >
                          Co-Location Server
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Domains
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/domain-registration/#check-free-domain"
                          smooth="true"
                          title="Check Free Domain"
                        >
                          {" "}
                          Check Free Domain{" "}
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/ssl-certificate"
                          title="SSL Certificate"
                        >
                          SSL Certificate
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/whois-checker"
                          title="WHOIS Checker"
                        >
                          WHOIS Checker
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Solutions
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/cpanel-whm-hosting-panel"
                          title="cPanel"
                        >
                          cPanel
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/plesk-hosting-panel"
                          title="Plesk"
                        >
                          Plesk
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/ddos-protection-data-center"
                          title="DDoS Protection"
                        >
                          DDoS Protection
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-4 col-lg-2">
                  <div className="footer-block mb-13 mb-lg-4">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Company
                    </h4>
                    <ul className="footer-list list-unstyled">
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/affiliates"
                          title="Affiliate Program"
                        >
                          Affiliate Program
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="https://blog.madpopo.com/"
                          target="_blank"
                          title="Blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" href="/career" title="Careers">
                          Careers
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link className="footer-list-link" href="/contact-us" title="Contact Us">
                          Contact Us
                        </Link>
                      </li>

                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/global-infrastructure"
                          title="Servers Locations"
                        >
                          Servers Locations
                        </Link>
                      </li>
                      {/* <li className="py-1">
                        <Link className="footer-list-link" href="/">
                          SLA
                        </Link>
                      </li> */}
                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/terms-conditions"
                          title="Terms & Conditions"
                        >
                          Terms & Conditions
                        </Link>
                      </li>

                      <li className="py-1">
                        <Link
                          className="footer-list-link"
                          href="/privacy-policy"
                          title="Privacy"
                        >
                          Privacy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-lg-3 pl-lg-8">
                  <div className="footer-block mb-13 mb-lg-4 d-none d-lg-block">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Do you need support?
                    </h4>
                    <p className="coodiv-text-11">
                      This can be handy to get the necessary
                      information right away.
                    </p>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4 text-center text-lg-left">
                    <h4 className="block-title coodiv-text-9 mb-4 position-relative">
                      Big traffic? Talk to Sales
                    </h4>
                    <p className="coodiv-text-11">
                      Working on a big project? Let our experts help you out.
                    </p>
                    <Link
                      href="/contact-us"
                      className="btn btn-red with-icon coodiv-text-11 white-text-btn rounded-25 py-3 coodiv-hover-y"
                    >
                      Talk to an expert{" "}
                      <i className="feather icon-arrow-right font-weight-bold"></i>
                    </Link>
                  </div>
                  <div className="footer-block mb-13 mb-lg-4 text-center text-lg-left">
                    <div className="socialMediaWrap">
                      <ul className="socialListIcons">
                        <li>
                          <Link href="https://www.facebook.com/madpopowp/" title="Facbook">
                            <i className="fa fa-facebook-square"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/madpopowp/" title="Instagram">
                            <i className="fa fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/company/madpopowp/" title="Linkedin">
                            <i className="fa fa-linkedin"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com/madpopowp" title="Twitter">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                              width="20px"
                              clipRule="evenodd"
                              baseProfile="basic"
                            >
                              <polygon
                                fill="#282c3b"
                                points="41,6 9.929,42 6.215,42 37.287,6"
                              />
                              <polygon
                                fill="#282c3b"
                                fillRule="evenodd"
                                points="31.143,41 7.82,7 16.777,7 40.1,41"
                                clipRule="evenodd"
                              />
                              <path
                                fill="#282c3b"
                                d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom-footer-area border-top pt-9 pb-8">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <p className="copyright-text coodiv-text-11 mb-6 mb-lg-0 coodiv-text-color-opacity text-center text-lg-left">
                    © 2023 MadPopo,{" "}
                    <Link
                      href="https://version-next.com/"
                      title="Version Next Technologies - Web Development Company"
                    >
                      Designed
                    </Link>{" "}
                    by{" "}
                    <Link
                      href="https://version-next.com/"
                      title="Version Next Technologies - Web Development Company"
                    >
                      Version Next Technologies
                    </Link>
                    .
                  </p>
                </div>
                <div className="col-lg-4 text-center text-lg-right">
                  <ul className="payment-getway list-unstyled mb-0">
                    <li className="ml-1">
                      <Image
                        src="/image/footer/visa.webp"
                        alt="visa"
                        width={40}
                        height={25}
                        priority
                      />
                    </li>
                    <li className="ml-1">
                      <Image
                        src="/image/footer/amex.webp"
                        alt="amex"
                        width={40}
                        height={25}
                        priority
                      />
                    </li>
                    <li className="ml-1">
                      <Image
                        src="/image/footer/discover.webp"
                        alt="discover"
                        width={40}
                        height={25}
                        priority
                      />
                    </li>
                    <li className="ml-1">
                      <Image
                        src="/image/footer/jcb.webp"
                        alt="jcb"
                        width={40}
                        height={25}
                        priority
                      />
                    </li>
                    <li className="ml-1">
                      <Image
                        src="/image/footer/maestro.webp"
                        alt="maestro"
                        width={40}
                        height={25}
                        priority
                      />
                    </li>
                    <li className="ml-1">
                      <Image
                        src="/image/footer/mastercard.webp"
                        alt="mastercard"
                        width={40}
                        height={25}
                        priority
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
