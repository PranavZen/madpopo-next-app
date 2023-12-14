"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dDSData2 from "../tabs/tabcontentbox/hostingpalndata/DDSData2";
function DDSCard2(props) {
  //  console.log(props);
  var defaultPrice4 = dDSData2[props.id - 1].priceThreeYearlyInINR;
  // console.log(defaultPrice4);
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
    show_price = dDSData2[props.id - 1][show_currency];
  } else if (selectedCountry == "€") {
    show_currency = "priceThreeYearlyInEUR";
    show_price = dDSData2[props.id - 1][show_currency];
  } else if (selectedCountry == "₹") {
    show_currency = "priceThreeYearlyInINR";
    show_price = dDSData2[props.id - 1][show_currency];
  }

  //  console.log(show_price);

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
    show_price_1 = dDSData2[props.id - 1][show_currency];
    setSelectPrice(show_price_1);
    //  console.log(show_price_1);

    // console.log(selectedCountry);
    //console.log(products.wordpressData[props.id - 1]);
  };
  return (
    <div className="col-lg-12 mb-9">
      <div
        className="ddos-attack-package games-plan plan-1 box-shadow-1
                    bg-white rounded-20 text-center pb-20 pt-9
                    pr-6 pl-6 position-relative
                    overflow-hidden"
      >
        <div className="d-flex mb-lg-7 plan-header">
          <div className="game-logo">
            <img src={props.cardVpsImg} alt={props.cardVpsAltName} />
          </div>
          <div className="game-title">
            <h3 className="mb-6">
              <a href={props.cardAnchorLink}>{props.cardVpsTitle}</a>
            </h3>
            <p className="fromText propsText">{props.cardVpsSubTitle}</p>
            <div className="selectDaysWrap">
              <form>
                <select
                  onChange={handleFrequencyChange}
                  value={selectedFrequency}
                  className="selectDay newSelectBox"
                >
                  <option value="priceThreeYearlyIn">Monthly</option>
                  <option value="priceTwoYearlyIn">Quarterly</option>
                </select>
              </form>
            </div>
            <h2 className="text-blackish-blue">
              {selectedCountry ? selectedCountry : bydefaultCurrency}
              {slectPrice ? slectPrice : show_price || defaultPrice4}
              <span className="payment-type-m">monthly</span>
            </h2>
          </div>
        </div>
        <div className="orginalPriceWrap">
          <p className="desPriceText">
            <span>Discounted from</span> {selectedCountry}{" "}
            <del>
              {((slectPrice ? slectPrice : show_price) * 3).toFixed(2)} / mo
            </del>
          </p>
        </div>
        <ul className="ddos-first-features">
          <li>
            <span className="capTitle">Processor</span>
            <span className="capAmt">{props.cardVpsWebSpace} vCPU Cores</span>
          </li>
          <li>
            <span className="capTitle">Memory</span>
            <span className="capAmt">{props.cardVpsCapacity} GB RAM</span>
          </li>
          <li>
            <span className="capTitle">Storage</span>
            <span className="capAmt">
              {props.cardVpsCapacity2} NVMe or {props.cardVpsCapacity3} SSD
            </span>
          </li>
        </ul>
        <ul className="ddos-second-features border-top">
          <li>
            <i className="feather icon-check-circle mr-3"></i> Snapshot{" "}
            {props.cardVpsSnap}
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> 32 TB Traffic*
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Unlimited
            Incoming
          </li>
          {/* <li>
            <i className="feather icon-check-circle mr-3"></i> 1 IPv4 Address
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Multiple DC
            Location
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Power Reboot
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i> Unmanaged Server
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Default Linux OS
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Free Control Panel
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>99,90% Uptime
            Guarantee
          </li>
          <li>
            <i className="feather icon-check-circle mr-3"></i>Advanced 24/7
            Expert Support
          </li> */}
        </ul>
        <Link href="#" className="btn-order">
          <span>Order Now</span>
        </Link>
      </div>
    </div>
  );
}

export default DDSCard2;
