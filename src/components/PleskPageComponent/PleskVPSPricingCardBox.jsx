"use client";
import React, { useState, useEffect } from "react";
import PleskVpsData from "../tabs/tabcontentbox/hostingpalndata/PleskVpsData";
function PleskVPSPricingCardBox(props) {
  // console.log(WindowsHostingDatas);
  var defaultPrice2 = PleskVpsData[props.id - 1].priceThreeYearlyInINR;
  // console.log(defaultPrice2);
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
    show_price = PleskVpsData[props.id - 1][show_currency];
  } else if (selectedCountry == "€") {
    show_currency = "priceThreeYearlyInEUR";
    show_price = PleskVpsData[props.id - 1][show_currency];
  } else if (selectedCountry == "₹") {
    show_currency = "priceThreeYearlyInINR";
    show_price = PleskVpsData[props.id - 1][show_currency];
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
    show_price_1 = PleskVpsData[props.id - 1][show_currency];
    setSelectPrice(show_price_1);
  };
  return (
    <div className="col-lg-4 mb-15 mb-lg-0 priceCardWrap">
      <div className="ddos-attack-package not-feaures-package shadow-2 priceCardDdos">
        <div className="toggleWrap d-flex">
          <h2 className="priceCardTitle mb-2">
            <a href={props.winHostAnchor}>{props.winHostTitle}</a>
          </h2>
        </div>
        <span className="fromText">{props.winHostSubTitle}</span>
        <div className="selectDaysWrap pleskVpsDrop">
          <form>
            <select
              onChange={handleFrequencyChange}
              value={selectedFrequency}
              className="selectDay"
            >
              <option value="priceThreeYearlyIn">1 Year</option>
              <option value="priceTwoYearlyIn">3 Months</option>
              <option value="priceYearlyIn">1 Months</option>
            </select>
          </form>
        </div>
        <div className="ddos-attack-price d-flex justify-content-between align-items-center mt-7 py-4">
          <h2 className="priceCardPriceAmt">
            {selectedCountry ? selectedCountry : bydefaultCurrency}
            {slectPrice ? slectPrice : show_price || defaultPrice2}
            <span className="monthSpan">
              per month <br /> billed annually
            </span>
          </h2>
        </div>
        <div className="orginalPriceWrap">
          <p className="desPriceText">
            <span>Discounted from</span> <del>{props.winHostOgPrice} / mo</del>
          </p>
        </div>
        <ul className="ddos-first-features border-top">
          <li>
            <span className="capTitle">Web Space</span>
            <span className="capAmt">{props.winHostCapacity}</span>
          </li>
          <li>
            <span className="capTitle">Unmetered Traffic </span>
            <span className="capAmt">{props.winHostSSHAccess}</span>
          </li>
          <li>
            <span className="capTitle">Account Domain</span>
            <span className="capAmt">{props.winHostDDOS}</span>
          </li>
        </ul>
        <ul className="ddos-second-features border-top">
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free Domain 1st
            Year*
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> {props.winHOPt1}{" "}
            Email Accounts
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> {props.winHOPt2}{" "}
            Sub Domains
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> FTP Account
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> {props.winHOPt3}{" "}
            MSSQL Database (200MB)
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> PHP Support
            7.4,8.0,8.1,8.2
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Free SSL
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>
            {props.winHOPt6}
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Managed WordPress
            Toolkit
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Out-of-the-box
            Caching
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Hosting Plesk
            Panel
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>99,90% Uptime
            Guarantee
          </li>
        </ul>

        <button className="btn btn-primary coodiv-hover-y w-100 mt-9 coodiv-text-9">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default PleskVPSPricingCardBox;
