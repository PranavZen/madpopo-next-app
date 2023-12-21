'use client'
import React, { useEffect, useState } from "react";
import domainListData from "./DomainSectionData/DomainListingData";
import DomainListBox from "./DomainSectionData/DomainListBox";

function DomainSection(props) {
  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);
  if (selectedCountry === "₹") {
    
    var acaT = (0.95 * 88.55).toFixed(2);
    var armT = (9.99 * 88.55).toFixed(2);
    var bioT = (5.12 * 88.55).toFixed(2);
    var bhaT = (11.95 * 88.55).toFixed(2);
  } else if (selectedCountry === "$") {
     var acaT1 = 0.95;
     var armT1 = 9.99;
     var bioT1 = 5.12;
     var bhaT1 = 11.95;
  } else if (selectedCountry === "€") {
     var acaT2 = (0.95 * 0.93).toFixed(2);
     var armT2 = (9.99 * 0.93).toFixed(2);
     var bioT2 = (5.12 * 0.93).toFixed(2);
     var bhaT2 = (11.95 * 0.93).toFixed(2);
  }
  const [domainName, setdomainName] = useState("");
  const action = "https://my.madpopo.com/cart.php?a=add&domain=register&query=";
  return (
    <div>
      <section className="more-services-group-container pt-20 px-lg-15 px-4 position-relative bg-default-2">
        <div className="container-fluid">
          <div className="row justify-content-lg-start justify-content-center px-lg-0 px-10 domSecRow">
            <div className="col-lg-8 col-11 text-lg-left text-center">
              <h2 className="coodiv-text-7 font-weight-bold mb-4">
                Your Domain, Your Identity: Why Choosing a Featured Domain Name
                Matters
              </h2>
              <p className="coodiv-text-10 font-weight-light mb-13">
                Choosing a featured domain name is essential for establishing
                your online identity and creating a successful web presence and
                why you're awesome. Find the{" "}
                <b className="font-weight-bold">right domain extension</b> now
                to grab more attention and visitors.
              </p>
            </div>
          </div>
          <div
            className="row justify-content-center aws-domains-ltds-prices row-1"
            id="homeDomCard"
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          >
            
            {domainListData.map((item) => {
              if(item.id <= 4){
                return (
                  <DomainListBox
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    domainName={item.domainName}
                    dollarPrice={item.dollarPrice}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
      <section
        className="domain-checker-emyui-aws-homepage dark-mode-texts py-12"
        id="domSearch"
      >
        <div className="container-fluid">
          <div className="row justify-content-start align-items-center">
            <div className="col-md-7 col-12">
              <form
                className="domain-checker-emyui-aws-homepage position-relative"
                action={domainName} method="post"
              >
                <div className="input-group">
                  <span className="input-group-input w-100">
                    <input
                    type="text"
                    id="domain"
                    name="domain"
                    className="homeinput"
                    onChange={(e) =>
                      setdomainName(action + e.target.value)
                    }
                      placeholder="eg. example.com"
                    />
                  </span>
                  <span className="input-group-btn">
                    <button
                      className="btn btn-search"
                      type="Submit"
                      id="btnDomainSearch"
                      aria-label="Search Domain"
                      
                    >
                      <i className="fa fa-angle-right"></i>
                      <span className="searchText">Search</span>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-5 col-12">
              <div className="domain-checker-emyui-aws-homepage-ltds h-100 row align-items-center justify-content-start">
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-lg-bottom-0 border-bottom border-right">
                  <h6 className="tld-domain">.online</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">
                  {selectedCountry ? selectedCountry : bydefaultCurrency}{selectedCountry? acaT || acaT1 || acaT2 : selectedCountry} /yr
                  </span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-lg-bottom-0 border-bottom border-lg-right">
                  <h6 className="tld-domain">.info</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">{selectedCountry ? selectedCountry : bydefaultCurrency}{selectedCountry? armT || armT1 || armT2 : selectedCountry} /yr</span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-right">
                  <h6 className="tld-domain">.tech</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">
                  {selectedCountry ? selectedCountry : bydefaultCurrency}{selectedCountry? bioT || bioT1 || bioT2 : selectedCountry} /yr
                  </span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6">
                  <h6 className="tld-domain">.name</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">
                  {selectedCountry ? selectedCountry : bydefaultCurrency}{selectedCountry? bhaT || bhaT1 || bhaT2 : selectedCountry} /yr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DomainSection;
