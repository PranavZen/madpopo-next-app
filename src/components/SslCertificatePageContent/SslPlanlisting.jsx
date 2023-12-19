import React from "react";
import SslPlanListingData from "./SslPlanListingData";
import Image from "next/image";

function SslPlanlisting(props) {
  return (
    <div className="wp_plans_listSection pt-20" data-aos="fade-left" data-aos-duration='1200'>
      <div className="container">
        <div className="wp_plansSectionTitle">
          <h2>All SSL Certificate Plans Include</h2>
        </div>
        <div className="wp_plansRow">
          {SslPlanListingData.map((list) => {
            return (
              <div className="col-md-4" key={list.id}>
                <div className="palnsWrapbox">
                  <div className="icon_box">
                  <span>
                      <Image
                        src="/image/pointer.png"
                        alt="common img"
                        width={35}
                        height={42}
                      />
                    </span>
                  </div>
                  <div className="plans_listName">
                    <h5>{list.plansTitle}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SslPlanlisting;
