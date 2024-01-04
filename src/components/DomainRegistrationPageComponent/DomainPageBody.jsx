"use client";
import React, { useEffect, useState } from "react";
import DomainListBox from "@/components/DomainSectionData/DomainListBox";
import domainListData from "@/components/DomainSectionData/DomainListingData";
import DomainRegistrationFeatures from "@/components/DomainRegistrationPageComponent/DomainRegistrationFeatures";
import domainFeatData from "@/components/DomainTableList/DomainFeatData";
import DomainTableList from "@/components/DomainTableList/DomainTableList";
function DomainPageBody() {
  const [show, setShow] = useState(false);
  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);
  if (selectedCountry === "₹") {
    var acaT = (29.1 * 88.55).toFixed(2);
    var armT = (34.99 * 88.55).toFixed(2);
    var bioT = (58.79 * 88.55).toFixed(2);
    var bhaT = (11.79 * 88.55).toFixed(2);
  } else if (selectedCountry === "$") {
    var acaT1 = 29.1;
    var armT1 = 34.99;
    var bioT1 = 58.79;
    var bhaT1 = 11.79;
  } else if (selectedCountry === "€") {
    var acaT2 = (29.1 * 0.93).toFixed(2);
    var armT2 = (34.99 * 0.93).toFixed(2);
    var bioT2 = (58.79 * 0.93).toFixed(2);
    var bhaT2 = (11.79 * 0.93).toFixed(2);
  }
  const [domainName, setdomainName] = useState("");
  const action = "https://my.madpopo.com/cart.php?a=add&domain=register&query=";
  return (
    <>
      <section className="more-services-group-container px-lg-15 px-4 position-relative dom_pt">
        <div className="container-fluid">
          <div className="row justify-content-lg-start justify-content-center align-items-center px-lg-0 px-10">
            <div className="col-xl-4 col-12 text-lg-left text-center">
              <h2 className="coodiv-text-4 font-weight-bold mb-4">
                All what you need is a featured domain name to start.
              </h2>
              <p className="coodiv-text-8 font-weight-light">
                The perfect domain lets people know at a glance why you're
                online{" "}
                <b className="font-weight-bold orangeBold">and why you're awesome</b>. Find
                the right domain extension now to grab more attention and
                visitors.
              </p>
            </div>
            <div className="col-xl-8 col-12 row justify-content-center aws-domains-ltds-prices row-1 imgAnch"
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
      <section id="check-free-domain"></section>
      <section
        className="domain-checker-emyui-aws-homepage dark-mode-texts py-12 regTarget"
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
                      className="homeinput searchInput form-control rounded-0"
                      onChange={(e) => setdomainName(action + e.target.value)}
                      placeholder="eg. example.com"
                    />
                  </span>
                  <span className="input-group-btn">
                    <button className="btn btn-search" type="" id="">
                      <i className="fa fa-angle-right"></i>
                      <span className="searchText">Register</span>
                    </button>
                  </span>
                </div>
              </form>
            </div>
            <div className="col-md-5 col-12">
              <div className="domain-checker-emyui-aws-homepage-ltds h-100 row align-items-center justify-content-start">
                <div className="aws-homepage-ltds-box col-md-3 col-6 border-lg-bottom-0 border-bottom border-right">
                  <h6 className="tld-domain">.ACADEMY</h6>
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
                  <h6 className="tld-domain">.ARMY</h6>
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
                  <h6 className="tld-domain">.BIO</h6>
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
                  <h6 className="tld-domain">.BHARAT</h6>
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
      <section className="dom_viewAllSection">
        <div className="container">
          <div className="dom_viewAllBtnWrap text-center">
            <button
              className="btn btn-primary coodiv-hover-y w-25 mt-9 coodiv-text-9"
              onClick={() => setShow(!show)}
            >
              {show ? " Close All Domains" : " View All Domains"}
            </button>
          </div>
          <div className="dom_viewAllWrapper">
            <div className="col-md-12">
              <div className="dom_listTableWrap">
                {show && <DomainTableList />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wp_features dom_reg_features">
        <div className="container">
          <div className="dom_reg_featWrapper d-flex">
            <div className=" col-md-4 dom_reg_featTable">
              <table className="table mt-12">
                <tbody>
                  {domainFeatData.map((domItem) => {
                    return (
                      <tr key={domItem.id}>
                        <td>{domItem.domFeat}</td>
                        <td>
                          <i className={domItem.domCheckIcon}></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-md-8">
              <DomainRegistrationFeatures />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DomainPageBody;
