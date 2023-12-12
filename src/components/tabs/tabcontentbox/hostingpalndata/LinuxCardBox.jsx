"use client";
import React, { useState, useEffect } from "react";
import LinuxData from "./LinuxHostingData";
import Link from "next/link";
function LinuxCardBox(props) {
  // console.log(LinuxData);
  var defaultPrice = LinuxData[props.id - 1].priceThreeYearlyInINR;
  // console.log(defaultPrice);
  var bydefaultCurrency = "₹";
  var show_price = "";
  var show_currency = "";
  var show_price_1 = "";

  const [selectedFrequency, setSelectedFrequency] =
    useState("priceThreeYearlyIn");

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const [slectPrice, setSelectPrice] = useState(show_price);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);

  if (selectedCountry == "$") {
    show_currency = "priceThreeYearlyInUSD";
    show_price = LinuxData[props.id - 1][show_currency];
  } else if (selectedCountry == "€") {
    show_currency = "priceThreeYearlyInEUR";
    show_price = LinuxData[props.id - 1][show_currency];
  } else if (selectedCountry == "₹") {
    show_currency = "priceThreeYearlyInINR";
    show_price = LinuxData[props.id - 1][show_currency];
  }

  // console.log(show_price);

  const handleCountryChange = (e) => {
    //alert(selectedCountry);

    setSelectedCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
  };
  const handleFrequencyChange = (e) => {
    var yr = e.target.value;
    setSelectedFrequency(e.target.value);

    if (yr == "priceThreeYearlyIn") {
      if (selectedCountry == "$") {
        show_currency = "priceThreeYearlyInUSD";
      } else if (selectedCountry == "€") {
        show_currency = "priceThreeYearlyInEUR";
      } else if (selectedCountry == "₹") {
        show_currency = "priceThreeYearlyInINR";
      }
    } else if (yr == "priceTwoYearlyIn") {
      if (selectedCountry == "$") {
        show_currency = "priceTwoYearlyInUSD";
      } else if (selectedCountry == "€") {
        show_currency = "priceTwoYearlyInEUR";
      } else if (selectedCountry == "₹") {
        show_currency = "priceTwoYearlyInINR";
      }

      //show_price = products.wordpressData[props.id - 1][show_currency];
    } else if (yr == "priceYearlyIn") {
      if (selectedCountry == "$") {
        show_currency = "priceYearlyInUSD";
      } else if (selectedCountry == "€") {
        show_currency = "priceYearlyInEUR";
      } else if (selectedCountry == "₹") {
        show_currency = "priceYearlyInINR";
      }

      //show_price = products.wordpressData[props.id - 1][show_currency];
    }
    show_price_1 = LinuxData[props.id - 1][show_currency];
    setSelectPrice(show_price_1);
    // console.log(show_price_1);

    // console.log(selectedCountry);
    //console.log(products.wordpressData[props.id - 1]);
  };
  return (
    <div
      className="col-lg-4 col-md-4 col-sm-8 mb-9 px-8
            px-md-4 px-lg-4 linuxOuterPrice"
    >
      <div
        className="ddos-attack-package pricing-plan-tree
                coodiv-hover-shadow-1 bg-white border
                rounded-10 text-center pt-6 pr-6 pl-6 pb-20
                position-relative"
      >
        <span className="linuxCardTitle d-block position-relative">
          <Link href={props.Linkss}>{props.cardlinuxTitle}</Link>
        </span>
        <span className="fromText d-block mb-8 mt-1">
          {props.cardlinuxSubTitle}
        </span>
        <div className="selectDaysWrap">
          <form>
            <select
              onChange={handleFrequencyChange}
              value={selectedFrequency}
              className="selectDay"
            >
              <option value="priceThreeYearlyIn">3 Years</option>
              <option value="priceTwoYearlyIn">2 Years</option>
              <option value="priceYearlyIn">1 Year</option>
            </select>
          </form>
        </div>
        <h2
          className="price-of-plan coodiv-text-4
                    font-weight-bold text-blackish-blue
                    line-spacing-none mb-2 mt-5"
        >
          <span className="currencyTag">
            {" "}
            {selectedCountry ? selectedCountry : bydefaultCurrency}
          </span>
          {slectPrice ? slectPrice : show_price || defaultPrice}
          <span
            className="coodiv-text-11
                    coodiv-color-blackish-blue-opacity-7 pl-5"
          >
            / month
          </span>
        </h2>
        <div className="orginalPriceWrap">
          <p className="desPriceText">
            <span>Discounted from</span> {selectedCountry}{" "}
            <del>
              {((slectPrice ? slectPrice : show_price) * 3).toFixed(2)} / mo
            </del>
          </p>
        </div>
        <ul className="ddos-first-features border-top">
          <li>
            <span className="capTitle">Web Space</span>
            <span className="capAmt">{props.cardlinuxCapacity}</span>
          </li>
          <li>
            <span className="capTitle">Unmetered Traffic</span>
            <span className="capAmt">Unlimited</span>
          </li>
          <li>
            <span className="capTitle">Anti DDOS protection</span>
            <span className="capAmt">Unlimited</span>
          </li>
        </ul>
        <ul className="ddos-second-features border-top">
          <li>
            <i className="feather icon-check-circle mr-3"></i>{" "}
            {props.cardlinuxOPt1}
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.cardlinuxOPT2} Account Domain
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.cardlinuxOPT3} Email Accounts
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.cardlinuxOPT4} Sub Domains
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.cardlinuxOPT5} MySQL Database
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free SSL
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>{" "}
            {props.cardlinuxOPT6}
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Managed WordPress
            Toolkit
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Out-of-the-box
            Caching
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Hosting CPanel
          </li>

          <li>
            <i className="feather icon-check-circle mr-3"></i> Free 1-click
            WordPress install
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> 24/7 Support
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> 99,90% Uptime
            Guarantee
          </li>
        </ul>
        <Link href="#" className="btn-order color1">
          <span>Order Now</span>
        </Link>
      </div>
    </div>
  );
}

export default LinuxCardBox;
