"use client";
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
    <>

      <section className="more-services-group-container bgGrays p-20 dom_pt">
        <div className="container-fluid">
          <div className="domainsListingRow">
            <div className="col-xl-6 col-12 listingMainPara">
              <h2 className="font-weight-bold mb-4 text-center">
                All what you need is a featured domain name to start.
              </h2>
              <p className="text-center font-weight-light">
                The perfect domain lets people know at a glance why you're
                online{" "}
                <span className="font-weight-bold orangeBold">and why you're awesome</span>. Find
                the right domain extension now to grab more attention and
                visitors.
              </p>
            </div>
            <div className="col-xl-12 col-12 imgAnch"
            id="mySearch"
          >
            {domainListData.map((item) => {
              return (
                <DomainListBox
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  domainName={item.domainName}
                  dollarPrice={item.dollarPrice}
                  width={item.width}
                  height={item.height}
                />
              );
            })}
          </div>
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
                action={domainName}
                method="post"
              >
                <div className="input-group">
                  <span className="input-group-input w-100">
                    <input
                      type="text"
                      id="domain"
                      name="domain"
                      className="homeinput"
                      onChange={(e) => setdomainName(action + e.target.value)}
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
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                    {selectedCountry
                      ? acaT || acaT1 || acaT2
                      : selectedCountry}{" "}
                    /yr
                  </span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-lg-bottom-0 border-bottom border-lg-right">
                  <h6 className="tld-domain">.info</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                    {selectedCountry
                      ? armT || armT1 || armT2
                      : selectedCountry}{" "}
                    /yr
                  </span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-right">
                  <h6 className="tld-domain">.tech</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                    {selectedCountry
                      ? bioT || bioT1 || bioT2
                      : selectedCountry}{" "}
                    /yr
                  </span>
                </div>
                <div className="aws-homepage-ltds-box col-md-3 col-6">
                  <h6 className="tld-domain">.name</h6>
                  <span className="tld-subtitle">Special offer</span>
                  <span className="tld-price">
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                    {selectedCountry
                      ? bhaT || bhaT1 || bhaT2
                      : selectedCountry}{" "}
                    /yr
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DomainSection;
