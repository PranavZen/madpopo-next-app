'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SyncRightBox(props) {
  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);

  if (selectedCountry === "₹") {
    // console.log(props.planPiceF);
    var price1 = props.planPiceF;
  } else if (selectedCountry === "$") { 
    // console.log(props.planPiceF2);
    var price2 = props.planPiceF2;
  } else if (selectedCountry === "€") {
    // console.log(props.planPiceF3);
    var price3 = props.planPiceF3;
  }

  return (
    <div
      className="pricing-box-one plan-with-montains slidePriceCardPosition"
      style={{ background: props.bgColor }}
    >
      <div className="price-content ">
        <span className="small-title-header-span">
          {props.planTitle}
          <span className="plan-badge">{props.planOffer}</span>
        </span>
        <div
          className="d-flex align-items-end
                                            mt-11 currencyData"
        >
          <span
            className="currency mr-2
                                                coodiv-text-6 changeCurrencyColor
                                                line-spacing-none
                                                text-blackish-blue"
          >
            {selectedCountry ? selectedCountry : bydefaultCurrency}
            {props.planCurrency}
          </span>
          <h2
            className="price-value coodiv-text-2
                                                mainCurrencyPrice
                                                line-spacing-none mb-0
                                                dynamic-value
                                                text-blackish-blue"
          >
            {selectedCountry ? price1 || price2 || price3 : selectedCountry}
            <span
              className="coodiv-text-8
            subCurrencyPrice"
            >
              {props.planPicePaisa}{" "}
            </span>
          </h2>
        </div>
        <span
          className="price-bottom-text
                                            dynamic-value coodiv-text-11 mt-2
                                            text-blackish-blue
                                            d-inline-flex priceYear"
        >
          Billed {props.billedCat}
        </span>
        <ul
          className="card-list list-style-check
                                            pl-0 mt-5 mt-lg-11"
        >
          
          <li className="coodiv-text-10 mb-2">
            {props.planIcon} {props.planList2}
          </li>
          <li className="coodiv-text-10 mb-2">
            {props.planIcon} {props.planList3}
          </li>
          <li className="coodiv-text-10 mb-2">
            {props.planIcon} {props.planList4}
          </li>
          <li className="coodiv-text-10">
            {props.planIcon} {props.planList5}
          </li>
        </ul>
      </div>
      <Link
        href={props.link}
        className="btn btn-special-home-plan
                                        with-icon coodiv-hover-y px-xl-8 px-lg-4
                                        px-sm-8 px-4 rounded-20 coodiv-text-12
                                        text-uppercase"
      >
        Try The Plan Now
      </Link>
    </div>
  );
}

export default SyncRightBox;
