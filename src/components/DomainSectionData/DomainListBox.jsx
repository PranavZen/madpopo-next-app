import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import domainListData from "./DomainListingData";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
function DomainListBox(props) { 
  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);

  if (selectedCountry === "₹") {
    var calc = (domainListData[props.id - 1].dollarPrice * 88.55).toFixed(2);
  } else if (selectedCountry === "$") {
    var calc2 = domainListData[props.id - 1].dollarPrice;
  } else if (selectedCountry === "€") {
    var calc3 = (domainListData[props.id - 1].dollarPrice * 0.93).toFixed(2);
  }
  return (
    <div className="col-md-3 aws-domains-ltds-prices-item white-bg custmd3" id={`domCard-`+props.id}>
      <Image src={props.img} alt="domain tld" width={props.width} height={props.height}/>
      <p className="coodiv-text-11 font-weight-light domParaText">
        Exhibit and sell your{" "}
        <b className="font-weight-bold">{props.domainName}</b> online
      </p>
      <span className="aws-domains-ltds-price-item mb-1">
        {selectedCountry ? selectedCountry : bydefaultCurrency}
        {selectedCountry ? calc || calc2 || calc3 : selectedCountry}
        <small>per year</small>
      </span>
      <Link
        to="domSearch"
        spy={true}
        smooth="true"
        offset={-100}
        duration={500}
        className="btn btn-outline-black coodiv-text-11 px-10 font-weight-bold rounded-0 d-block w-100 d-flex align-items-center justify-content-center btn-with-hide-icon"
      >
        Register
        <i className="feather icon-arrow-right font-weight-bold"></i>
      </Link>
    </div>
  );
}

export default DomainListBox;
