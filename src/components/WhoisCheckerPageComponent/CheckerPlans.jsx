"use client"
import React, { useEffect, useState } from "react";

function CheckerPlans() {
  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);
  if (selectedCountry === "₹") {
    var acaT = (5.9 * 76.1).toFixed(0);
    var armT = (5.9 * 76.1).toFixed(0);
    var bioT = (6.5 * 76.7).toFixed(0);
    var bhaT = (6.5 * 76.7).toFixed(0);
    var vdsT = (26.1 * 76.6).toFixed(0);
  } else if (selectedCountry === "$") {
    var acaT1 = 5.9;
    var armT1 = 6.2;
    var bioT1 = 6.9;
    var bhaT1 = 6.9;
    var vdsT1 = 24.99;
  } else if (selectedCountry === "€") {
    var acaT2 = (5.9 * 0.93).toFixed(0);
    var armT2 = (5.6 * 0.93).toFixed(1);
    var bioT2 = (6 * 0.93).toFixed(0);
    var bhaT2 = (6 * 0.93).toFixed(0);
    var vdsT2 = (26 * 0.93).toFixed(0);
  }
  return (
    <section id="pricingCardSection">
      <div className="container">
        <div className="sectionTitle">
          <h4 className="mb-12 mt-12">
            Establish your brand with our recommended plans
          </h4>
        </div>
        <div className="whoisCheckerPricingCardWrap">
          <div className="col-md-3">
            <div className="plansInner">
              <div className="plansDetails">
                <h4>GeekPro</h4>
                <p>Ideal for personal websites</p>
              </div>
              <div className="plansPrices">
                <h5>
                  <span>
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                  </span>
                  {selectedCountry ? acaT || acaT1 || acaT2 : selectedCountry}
                </h5>
                <span>per month billed annually</span>
              </div>
              <div className="plansDiscount">
                <p>
                  Discounted from{" "}
                  <del>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {(
                      (selectedCountry
                        ? acaT || acaT1 || acaT2
                        : selectedCountry) * 3
                    ).toFixed(2)}{" "}
                    / mo
                  </del>
                </p>
              </div>
              <div className="plansBuyWrap">
                <a href="/wordpress-hosting">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="plansInner">
              <div className="plansDetails">
                <h4>Popo Store Pro</h4>
                <p>Ideal for personal websites</p>
              </div>
              <div className="plansPrices">
                <h5>
                  <span>
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                  </span>
                  {selectedCountry ? armT || armT1 || armT2 : selectedCountry}
                </h5>
                <span>per month billed annually</span>
              </div>
              <div className="plansDiscount">
                <p>
                  Discounted from{" "}
                  <del>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {(
                      (selectedCountry
                        ? armT || armT1 || armT2
                        : selectedCountry) * 3
                    ).toFixed(2)}{" "}
                    / mo
                  </del>
                </p>
              </div>
              <div className="plansBuyWrap">
                <a href="/woocommerce-hosting">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="plansInner">
              <div className="plansDetails">
                <h4>RockyPro</h4>
                <p>Ideal for personal websites</p>
              </div>
              <div className="plansPrices">
                <h5>
                  <span>
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                  </span>
                  {selectedCountry ? bioT || bioT1 || bioT2 : selectedCountry}
                </h5>
                <span>per month billed annually</span>
              </div>
              <div className="plansDiscount">
                <p>
                  Discounted from{" "}
                  <del>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {(
                      (selectedCountry
                        ? bioT || bioT1 || bioT2
                        : selectedCountry) * 3
                    ).toFixed(2)}{" "}
                    / mo
                  </del>
                </p>
              </div>
              <div className="plansBuyWrap">
                <a href="/linux-web-hosting">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="plansInner">
              <div className="plansDetails">
                <h4>WinPro</h4>
                <p>Ideal for personal websites</p>
              </div>
              <div className="plansPrices">
                <h5>
                  <span>
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                  </span>
                  {selectedCountry ? bhaT || bhaT1 || bhaT2 : selectedCountry}
                </h5>
                <span>per month billed annually</span>
              </div>
              <div className="plansDiscount">
                <p>
                  Discounted from{" "}
                  <del>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {(
                      (selectedCountry
                        ? bhaT || bhaT1 || bhaT2
                        : selectedCountry) * 3
                    ).toFixed(2)}{" "}
                    / mo
                  </del>
                </p>
              </div>
              <div className="plansBuyWrap">
                <a href="/windows-hosting">Buy Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="plansInner">
              <div className="plansDetails">
                <h4>PopoPro</h4>
                <p>Ideal for personal websites</p>
              </div>
              <div className="plansPrices">
                <h5>
                  <span>
                    {selectedCountry ? selectedCountry : bydefaultCurrency}
                  </span>
                  {selectedCountry ? vdsT || vdsT1 || vdsT2 : selectedCountry}
                </h5>
                <span>per month billed annually</span>
              </div>
              <div className="plansDiscount">
                <p>
                  Discounted from{" "}
                  <del>
                    <span>
                      {selectedCountry ? selectedCountry : bydefaultCurrency}
                    </span>
                    {(
                      (selectedCountry
                        ? vdsT || vdsT1 || vdsT2
                        : selectedCountry) * 3
                    ).toFixed(2)}{" "}
                    / mo
                  </del>
                </p>
              </div>
              <div className="plansBuyWrap">
                <a href="/virtual-server">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckerPlans;
