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
    <div className="col-md-3 aws-domains-ltds-prices-item custmd3" id={`domCard-`+props.id}>
      <Image src={props.img} alt="domain tld" width={props.width} height={props.height}/>
      <p className="coodiv-text-11 font-weight-light domParaText">
        Exhibit and sell your{" "}
        <span className="font-weight-bold">{props.domainName}</span> online
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
        className="btn btn-with-hide-icon"
      >
        Register
        <i className="fa fa-long-arrow-right font-weight-bold"></i>
      </Link>
    </div>
  );
}

export default DomainListBox;
