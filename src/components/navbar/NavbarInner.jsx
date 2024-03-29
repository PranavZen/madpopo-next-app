"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CountrySelect from "../countryselect/CountrySelect";
function NavbarInner() {
  const [scroll, setScroll] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeToggle, setActiveToggle] = useState(false);

  const scrollRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleToggleClick = () => {
    setActiveToggle(!activeToggle);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  useEffect(() => {
    // Check scroll position on page reload
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Class logic on page reload
    const header = document.querySelector("header");
    if (scroll) {
      header.classList.add("top-header-fixed", "white-bg", "light-mode-texts");
      header.classList.remove("dark-mode-texts");
    } else {
      header.classList.remove(
        "top-header-fixed",
        "white-bg",
        "light-mode-texts"
      );
      header.classList.add("dark-mode-texts");
    }
  }, [scroll]);

  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);
  const [domainName, setdomainName] = useState("");
  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);
  if (selectedCountry === "₹") {
    var dT = (11.71 * 88.55).toFixed(2);
    var drT = (11.71 * 88.55).toFixed(2);
  } else if (selectedCountry === "$") {
    var dT1 = 11.71;
    var drT1 = 11.71;
  } else if (selectedCountry === "€") {
    var dT2 = (11.71 * 0.93).toFixed(2);
    var drT2 = (11.71 * 0.93).toFixed(2);
  }
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY > 50);
  //   });
  // }, []);
  const action = "https://my.madpopo.com/cart.php?a=add&domain=register&query=";
  return (
    <header
      className={
        scroll
          ? "bgtop site-header header-with-right-menu site-header--absolute fixed-header-layout top-header-fixed white-bg light-mode-texts"
          : "bgtop site-header header-with-right-menu site-header--absolute fixed-header-layout dark-mode-texts"
      }
    >
      <div className="container-fluid pr-lg-9 pl-lg-9">
        <div className="topBarStrip">
          <div className="topInner">
            <span className="numSpan">
              <span className="textBold">
                <i className="fa fa-phone"></i> Need Help ?
              </span>{" "}
              Call Us 24/7 :{" "}
              <Link href="tel:+917039003001" title="tel:+91 7039 003 001">
                +91 7039 003 001
              </Link>
            </span>
            <div className="inrSelectWrap">
              <div className="inrSelectBox">
                <CountrySelect />
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar site-navbar offcanvas-active
                          navbar-expand-lg px-0"
        >
          <div className="brand-logo mr-8 newBrandLogo">
            <Link
              href="/"
              ref={scrollRef}
              onClick={scrollToTop}
              title="MadPopo Logo"
            >
              <Image
                priority
                src="/image/header/madpopo-dark-logo.svg"
                alt="MadPopo dark logo"
                className="light-version-logo"
                width={165}
                height={77}
              />
              <Image
                priority
                src="/image/header/madpopo-white-logo.svg"
                alt="MadPopo light logo"
                className="dark-version-logo"
                width={165}
                height={77}
              />
            </Link>
          </div>

          <div
            className={
              activeToggle
                ? `collapse navbar-collapse show`
                : "collapse navbar-collapse"
            }
            id="mobile-menu"
          >
            <div className="navbar-nav-wrapper">
              <ul
                id="header-navbar-links"
                className="navbar-nav
                                      main-menu"
              >
                <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link dropdown-toggle coodiv-toggle-arrow"
                    id="navbarDropdown90"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hosting{" "}
                    <span className="downArrowMenu whiteArrow innerArrow">
                      {" "}
                      <Image
                        priority
                        src="/image/header/down-arrow-white.png"
                        alt="down arrow"
                        width={12}
                        height={8}
                      ></Image>
                    </span>
                    <span className="downArrowMenu blackArrow innerArrow">
                      {" "}
                      <Image
                        priority
                        src="/image/header/down-arrow-black.png"
                        alt="down arrow"
                        width={12}
                        height={8}
                      ></Image>
                    </span>
                  </Link>
                  <div
                    className="coodiv-megamenu-dropdown
                                          fullwidth-megamenu center
                                          dropdown-menu d-lg-flex px-lg-10
                                          px-5 py-10"
                    aria-labelledby="navbarDropdown90"
                  >
                    <div
                      className="row
                                              justify-content-center mt-lg-6
                                              mx-0 w-100 "
                    >
                      <div className="col-md-12">
                        <h4
                          className="coodiv-text-6
                                                      title
                                                      color-blackish-blue
                                                      text-lg-left text-center
                                                      w-100 d-block mb-14 dropdownMenuTitle"
                        >
                          <span className="mainTitleDrop mb-2 d-block">
                            Web hosting that scales from easy to expert.
                          </span>
                          <span className="d-block mt-lg-0 mt-5 coodiv-text-11 color-blackish-blue-opacity subTitleDrop">
                            A ton of website hosting options, 99.9% uptime
                            guarantee, free SSL certificate, easy WordPress
                            installs, and a free domain for a year.
                          </span>
                        </h4>
                        <div
                          className="row
                                                      justify-content-center
                                                      mx-0 mobMenuList"
                        >
                          <div
                            className="col-md-6
                                                          col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              href="/wordpress-hosting"
                              className="feature-widget
                                                              d-sm-flex "
                              title="WordPress Hosting"
                            >
                              <div
                                className="widget-icon
                                                                  text-blue
                                                                  mr-5 mr-lg-6
                                                                  mb-7
                                                                  mb-md-0"
                              >
                                <span>
                                  <Image
                                    priority
                                    src="/image/header/navbaricon/wordpressicon.png"
                                    alt="WordPress Hosting"
                                    width={40}
                                    height={40}
                                  />
                                </span>
                              </div>
                              <div className="content">
                                <h3 className="title coodiv-text-9 mb-2 color-blackish-blue wblink">
                                  WordPress Hosting
                                </h3>
                                <p className="coodiv-text-11 color-blackish-blue-opacity mb-0 wbsubLink">
                                  Streamline your site with WordPress hosting.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div className="col-md-6 col-lg-3 mb-10 menusHover">
                            <Link
                              href="/woocommerce-hosting"
                              className="feature-widget d-sm-flex"
                              title=" WooCommerce Hosting"
                            >
                              <div className="widget-icon text-blue mr-5 mr-lg-6 mb-7 mb-md-0">
                                <span>
                                  <Image
                                    priority
                                    src="/image/header/navbaricon/woocomicon.png"
                                    alt=" WooCommerce Hosting"
                                    width={23}
                                    height={40}
                                  />
                                </span>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                      coodiv-text-9
                                                                      mb-2
                                                                      color-blackish-blue wblink"
                                >
                                  WooCommerce Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                      color-blackish-blue-opacity
                                                                      mb-0 wbsubLink"
                                >
                                  Power up your online store with WooCommerce
                                  hosting.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                          col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              href="/linux-web-hosting"
                              className="feature-widget
                                                              d-sm-flex"
                              title="Linux Web Hosting"
                            >
                              <div
                                className="widget-icon
                                                                  text-blue
                                                                  mr-5 mr-lg-6
                                                                  mb-7
                                                                  mb-md-0"
                              >
                                <Image
                                  priority
                                  src="/image/header/navbaricon/linuxicon.png"
                                  alt=" Linux Web Hosting"
                                  width={40}
                                  height={44}
                                />
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                      coodiv-text-9
                                                                      mb-2
                                                                      color-blackish-blue wblink"
                                >
                                  Linux Web Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                      color-blackish-blue-opacity
                                                                      mb-0 wbsubLink"
                                >
                                  Optimize your site with Linux hosting.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                          col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              href="/windows-hosting"
                              className="feature-widget
                                                              d-sm-flex"
                              title="Windows Web Hosting"
                            >
                              <div
                                className="widget-icon
                                                                  text-blue
                                                                  mr-5 mr-lg-6
                                                                  mb-7
                                                                  mb-md-0"
                              >
                                <span>
                                  <Image
                                    priority
                                    src="/image/header/navbaricon/windowsicon.png"
                                    alt="Windows Web Hosting"
                                    width={40}
                                    height={42}
                                  />
                                </span>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                      coodiv-text-9
                                                                      mb-2
                                                                      color-blackish-blue wblink"
                                >
                                  Windows Web Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                      color-blackish-blue-opacity
                                                                      mb-0 wbsubLink"
                                >
                                  Enhance your site with Windows hosting.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                          col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              href="/virtual-server"
                              className="feature-widget
                                                              d-sm-flex"
                              title="Cloud Server"
                            >
                              <div
                                className="widget-icon
                                                                  text-blue
                                                                  mr-5 mr-lg-6
                                                                  mb-7
                                                                  mb-md-0"
                              >
                                <span>
                                  <Image
                                    priority
                                    src="/image/header/navbaricon/virtual-dedicated-server.png"
                                    alt="Cloud Server"
                                    width={40}
                                    height={29}
                                  />
                                </span>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                      coodiv-text-9
                                                                      mb-2
                                                                      color-blackish-blue wblink"
                                >
                                  Cloud Server
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                      color-blackish-blue-opacity
                                                                      mb-0 wbsubLink"
                                >
                                  Streamline IT Infrastructure
                                  with Cloud Servers
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                          col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              href="/dedicated-server"
                              className="feature-widget
                                                              d-sm-flex"
                              title="Dedicated Server"
                            >
                              <div
                                className="widget-icon
                                                                  text-blue
                                                                  mr-5 mr-lg-6
                                                                  mb-7
                                                                  mb-md-0"
                              >
                                <span>
                                  <Image
                                    priority
                                    src="/image/header/navbaricon/dedicated-server.png"
                                    alt="Dedicated Server"
                                    width={40}
                                    height={44}
                                  />
                                </span>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                      coodiv-text-9
                                                                      mb-2
                                                                      color-blackish-blue wblink"
                                >
                                  Dedicated Server
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                      color-blackish-blue-opacity
                                                                      mb-0 wbsubLink"
                                >
                                  Maximize performance with dedicated server.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                          col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              href="/business-email-hosting"
                              className="feature-widget
                                                              d-sm-flex"
                              title="Business Email Hosting"
                            >
                              <div
                                className="widget-icon
                                                                  text-blue
                                                                  mr-5 mr-lg-6
                                                                  mb-7
                                                                  mb-md-0"
                              >
                                <span>
                                  <Image
                                    priority
                                    src="/image/header/navbaricon/Emailicon.png"
                                    alt="Business Email Hosting"
                                    width={40}
                                    height={42}
                                  />
                                </span>
                              </div>
                              <div className="content">
                                <h3
                                  className="title 
                                                                      coodiv-text-9
                                                                      mb-2
                                                                      color-blackish-blue wblink"
                                >
                                  Business Email Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                      color-blackish-blue-opacity
                                                                      mb-0 wbsubLink"
                                >
                                  Streamline communication with business email
                                  hosting.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div
                            className="col-md-6
                                                          col-lg-3 mb-10 menusHover"
                          >
                            <Link
                              href="/reseller-hosting"
                              className="feature-widget
                                                              d-sm-flex"
                              title="Reseller Hosting"
                            >
                              <div
                                className="widget-icon
                                                                  text-blue
                                                                  mr-5 mr-lg-6
                                                                  mb-7
                                                                  mb-md-0"
                              >
                                <span>
                                  <Image
                                    priority
                                    src="/image/header/navbaricon/Resellericon.png"
                                    alt="Reseller Hosting"
                                    width={40}
                                    height={39}
                                  />
                                </span>
                              </div>
                              <div className="content">
                                <h3
                                  className="title
                                                                      coodiv-text-9
                                                                      mb-2
                                                                      color-blackish-blue wblink"
                                >
                                  Reseller Hosting
                                </h3>
                                <p
                                  className="coodiv-text-11
                                                                      color-blackish-blue-opacity
                                                                      mb-0 wbsubLink"
                                >
                                  Manage multiple sites with reseller hosting.
                                </p>
                              </div>
                            </Link>
                          </div>

                          <Link
                            className="btn
                          btn-primary
                                                          coodiv-text-9
                                                          d-block w-50 buyBtnW100"
                            href="https://my.madpopo.com/login"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown dropdown-mega">
                  <Link
                    className="nav-link dropdown-toggle coodiv-toggle-arrow"
                    id="domaindropdown"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Domains
                    <span className="downArrowMenu whiteArrow innerArrow">
                      {" "}
                      <Image
                        priority
                        src="/image/header/down-arrow-white.png"
                        alt="down arrow"
                        width={12}
                        height={8}
                      ></Image>
                    </span>
                    <span className="downArrowMenu blackArrow innerArrow">
                      {" "}
                      <Image
                        priority
                        src="/image/header/down-arrow-black.png"
                        alt="down arrow"
                        width={12}
                        height={8}
                      ></Image>
                    </span>
                  </Link>
                  <div
                    className="coodiv-megamenu-dropdown
                                            mini-version center white-bg
                                            dropdown-menu d-lg-block pt-0"
                    aria-labelledby="domaindropdown"
                  >
                    <div
                      className="
                                                justify-content-start
                                                mega-menu-header nav"
                      
                      id="global-network-tabs"
                    >
                      <a
                        className={
                          activeTab === "tab1"
                            ? `toggle-domain-s-t
                                                    d-inline-block col-md-6
                                                    active-link-border pl-lg-10
                                                    pt-lg-8 pb-lg-5 pl-6 pt-4
                                                    pb-4 rounded-top-left-8 nav-link active cursorPointer`
                            : `toggle-domain-s-t
                                                    d-inline-block col-md-6
                                                    active-link-border pl-lg-10
                                                    pt-lg-8 pb-lg-5 pl-6 pt-4
                                                    pb-4 rounded-top-left-8 nav-link cursorPointer`
                        }
                        id="global-network-country-001-tab"
                        onClick={() => handleTabClick("tab1")}
                        title="Domain Registration"
                      >
                        <h4
                          className="coodiv-text-8
                                                        title
                                                        color-blackish-blue
                                                        text-left w-100
                                                        d-block mainTitleDrop"
                        >
                          <span>Domain Registration</span>
                          <span
                            className="d-block
                                                            coodiv-text-11
                                                            color-blackish-blue-opacity
                                                            subTitleDrop"
                          >
                            Grab a .com starting at{" "}
                            <span className="textPBold">
                              {selectedCountry
                                ? selectedCountry
                                : bydefaultCurrency}
                              {selectedCountry
                                ? drT || drT1 || drT2
                                : selectedCountry}{" "}
                              /yr*
                            </span>
                            .
                          </span>
                        </h4>
                      </a>
                      <a
                        className={
                          activeTab === "tab2"
                            ? `toggle-domain-s-t
                                                    d-inline-block col-md-6
                                                    active-link-border pl-lg-10
                                                    pt-lg-8 pb-lg-5 pl-6 pt-4
                                                    pb-4 rounded-top-left-8 nav-link active cursorPointer`
                            : `toggle-domain-s-t
                                                    d-inline-block col-md-6
                                                    active-link-border pl-lg-10
                                                    pt-lg-8 pb-lg-5 pl-6 pt-4
                                                    pb-4 rounded-top-left-8 nav-link cursorPointer`
                        }
                        id="global-network-country-002-tab"
                        onClick={() => handleTabClick("tab2")}
                        title="Domain Transfer"
                      >
                        <h4
                          className="coodiv-text-8
                                                        title
                                                        color-blackish-blue
                                                        text-left w-100
                                                        d-block mainTitleDrop"
                        >
                          <span>Domain Transfer</span>
                          <span
                            className="d-block
                                                            coodiv-text-11
                                                            color-blackish-blue-opacity
                                                            subTitleDrop"
                          >
                            starting at
                            <b className="textPBold">
                              {" "}
                              {selectedCountry
                                ? selectedCountry
                                : bydefaultCurrency}
                              {selectedCountry
                                ? dT || dT1 || dT2
                                : selectedCountry}{" "}
                              /yr*
                            </b>
                            .
                          </span>
                        </h4>
                      </a>
                    </div>
                    <div
                      className="pt-10
                                                mega-menu-body tab-content "
                      id="global-network-tabsContent"
                    >
                      {activeTab === "tab1" && (
                        <div
                          className="row
                                                    justify-content-center tab-pane fade show active"
                          id="global-network-country-001"
                        >
                          <div
                            className="col-xl-12
                                                        col-lg-7 col-md-8
                                                        col-sm-11"
                          >
                            <div
                              className="domain-search-form
                                                            mb-8"
                            >
                              <form action={domainName} method="post">
                                <div
                                  className="form-group
                                                                    position-relative
                                                                    text-lg-left
                                                                    text-center dom_mobForm px-5"
                                >
                                  <input
                                    className="form-control
                                                                        coodiv-text-9
                                                                        border-separate
                                                                        mb-lg-6
                                                                        mb-2
                                                                        min-height-px-64"
                                    type="text"
                                    id="domains"
                                    name="domain"
                                    onChange={(e) =>
                                      setdomainName(action + e.target.value)
                                    }
                                    placeholder="Enter your domain name"
                                  />
                                  <button
                                    className="form-btn d-flex justify-content-center align-items-center
                                                                        btn
                                                                        btn-primary
                                                                        mr-8
                                                                        coodiv-abs-md-cr
                                                                        min-height-px-50
                                                                        w-25
                                                                        w-md-auto"
                                  >
                                    check
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="domaulListing d-flex flex-wrap pb-5">
                              <div className="col-md-6 listTitle">
                                <Link
                                  href="/domain-registration"
                                  title="Free with Domain Registration"
                                >
                                  <p>Free with Domain Registration</p>
                                  <ul className="listFeatureDomain">
                                    <li>
                                     
                                        <i className="feather icon-check"></i> 2
                                        Free Email Accounts
                                      
                                    </li>
                                    <li>
                                     
                                        <i className="feather icon-check"></i>{" "}
                                        Privacy Protection
                                     
                                    </li>
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        Domain Theft Protection
                                      
                                    </li>
                                  </ul>
                                </Link>
                              </div>
                              <div className="col-md-6 listTitle">
                                <Link
                                  href="/domain-registration"
                                  title="Free DNS Services"
                                >
                                  <p>Free DNS Services</p>
                                  <ul className="listFeatureDomain">
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        DNS Management
                                      
                                    </li>
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        Domain Forwarding
                                      
                                    </li>
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        Multiple Mail Forwards
                                      
                                    </li>
                                  </ul>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "tab2" && (
                        <div
                          className="row
                                                    justify-content-center tab-pane fade show active"
                          id="global-network-country-002"
                        >
                          <div
                            className="col-xl-12
                                                        col-lg-7 col-md-8
                                                        col-sm-11"
                          >
                            <div
                              className="domain-search-form
                                                            mb-8"
                            >
                              <form action={domainName} method="post">
                                <div
                                  className="form-group
                                                                  position-relative
                                                                  text-lg-left
                                                                  text-center dom_mobForm px-5"
                                >
                                  <input
                                    className="form-control
                                                                coodiv-text-9
                                                                border-separate
                                                                mb-lg-6
                                                                mb-2
                                                                min-height-px-64"
                                    type="text"
                                    id="domains"
                                    name="domain"
                                    onChange={(e) =>
                                      setdomainName(action + e.target.value)
                                    }
                                    placeholder="Enter your domain name"
                                  />
                                  <button
                                    className="form-btn d-flex justify-content-center align-items-center
                                                                      btn
                                                                      btn-primary
                                                                      mr-8
                                                                      coodiv-abs-md-cr
                                                                      min-height-px-50
                                                                      w-25
                                                                      w-md-auto"
                                  >
                                    check
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="domaulListing d-flex flex-wrap pb-5">
                              <div className="col-md-6 listTitle">
                                <Link
                                  href="/domain-transfer"
                                  title="Free with Domain Transfer"
                                >
                                  <p>Free with Domain Transfer</p>
                                  <ul className="listFeatureDomain">
                                    <li>
                                      
                                        <i className="feather icon-check"></i> 2
                                        Free Email Accounts
                                     
                                    </li>
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        Privacy Protection
                                     
                                    </li>
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        Domain Theft Protection
                                      
                                    </li>
                                  </ul>
                                </Link>
                              </div>
                              <div className="col-md-6 listTitle">
                                <Link
                                  href="/domain-transfer"
                                  title="Free DNS Services"
                                >
                                  <p>Free DNS Services</p>
                                  <ul className="listFeatureDomain">
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        DNS Management
                                      
                                    </li>
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        Domain Forwarding
                                      
                                    </li>
                                    <li>
                                      
                                        <i className="feather icon-check"></i>{" "}
                                        Multiple Mail Forwards
                                      
                                    </li>
                                  </ul>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    href="/affiliates"
                    className="nav-link"
                    title="Affiliate"
                  >
                    Affiliate
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle coodiv-toggle-arrow"
                    id="navbarDropdownHelp"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About Us{" "}
                    <span className="downArrowMenu whiteArrow innerArrow">
                      {" "}
                      <Image
                        priority
                        src="/image/header/down-arrow-white.png"
                        alt="down arrow"
                        width={12}
                        height={8}
                      ></Image>
                    </span>
                    <span className="downArrowMenu blackArrow innerArrow">
                      {" "}
                      <Image
                        priority
                        src="/image/header/down-arrow-black.png"
                        alt="down arrow"
                        width={12}
                        height={8}
                      ></Image>
                    </span>
                  </Link>
                  <ul
                    className="coodiv-megamenu-dropdown
                    mini-version center white-bg
                    dropdown-menu d-lg-block pt-0"
                    aria-labelledby="navbarDropdownHelp"
                  >
                    <li>
                    <div className="d-flex flex-wrap abtMenu">
                      <h4 className="coodiv-text-6 title color-blackish-blue text-lg-left text-center w-100 d-block mb-12 dropdownMenuTitle">
                        <span className="mainTitleDrop">About us</span>
                        <span className="d-block about-our-storymt-lg-0 mt-5 coodiv-text-11 color-blackish-blue-opacity subTitleDrop">
                          A ton of website hosting options, 99.9% uptime
                          guarantee, free SSL certificate, easy WordPress
                          installs, and a free domain for a year.
                        </span>
                      </h4>
                      <div className="col-md-4 abtMenuList">
                        <ul>
                          <li className="drop-menu-item">
                            <Link
                              href="/global-infrastructure"
                              title="Global infrastructure"
                            >
                              Global infrastructure
                            </Link>
                          </li>
                          <li className="drop-menu-item">
                            <Link
                              href="https://blog.madpopo.com/"
                              target="_blank"
                              title="Company Blog"
                            >
                              Company Blog
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 abtMenuList">
                        <ul>
                          <li className="drop-menu-item">
                            <Link
                              href="/terms-conditions"
                              title="Terms & Conditions"
                            >
                              Terms & Conditions
                            </Link>
                          </li>
                          <li className="drop-menu-item">
                            <Link href="/career" title="Careers">
                              Careers
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 abtMenuList">
                        <ul>
                          <li className="drop-menu-item">
                            <Link
                              href="/happy-customer"
                              title="Happy Customers"
                            >
                              Happy Customers
                            </Link>
                          </li>
                          <li className="drop-menu-item">
                            <Link href="/contact-us" title="Contact">
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    href="/help-center"
                    className="nav-link"
                    title="Help Center"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="header-btn ml-auto ml-lg-5 d-none
                              d-xs-block position-relative"
          >
            <Link
              href="https://my.madpopo.com/login"
              className="headLoginBtn coodiv-text-9"
            >
              Login
            </Link>
          </div>

          <button
            className={
              activeToggle
                ? `navbar-toggler btn-close-off-canvas
                              hamburger-icon border-0`
                : `navbar-toggler btn-close-off-canvas
                              hamburger-icon border-0 collapsed`
            }
            type="button"
            onClick={() => handleToggleClick(true)}
          >
            <span
              className="hamburger hamburger--squeeze
                                  js-hamburger"
            >
              <span
                className={
                  !activeToggle ? `hamburger-box outer` : `hamburger-box inner`
                }
              >
                <i
                  className="fa fa-bars icon-menu"
                  style={{ display: activeToggle ? "none" : "block" }}
                ></i>
                <i
                  className="fa fa-times"
                  style={{ display: activeToggle ? "block" : "none" }}
                ></i>
              </span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavbarInner;
