import Image from "next/image";
import React from "react";
import vdsListing from "./VdsLsitingData";

function VdsListing() {
  return (
    <div
      className="wp_plans_listSection"
      data-aos="fade-left"
      data-aos-duration="1200"
    >
      <div className="container">
        <div className="wp_plansSectionTitle">
          <h2>
            Operating Systems, Apps, and Deployment Options for Your Virtual
            Server
          </h2>
        </div>
        <div className="wp_plansRow">
          {vdsListing.map((list) => {
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

export default VdsListing;
