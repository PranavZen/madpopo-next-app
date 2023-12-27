import VPSCard from "@/components/pricecard/VPSCard";
import React from "react";
import VpsData from "./hostingpalndata/VPSData";

function ThirdTabContent() {
  return (
    <div className="main-homepage-item vpsSevtionWrap">
      <div className="row justify-content-center vpsRow">
        {VpsData.map(
          ({
            id,
            cardVpsTitle,
            cardVpsSubTitle,
            cardAnchorLink,
            cardVpsImg,
            cardVpsAltName,
            cardVpsOgPrice,
            cardVpsWebSpace,
            cardVpsCapacity,
            cardVpsCapacity2,
            cardVpsCapacity3,
            cardVpsSnap,
            cardVpsOPt1,
            cardVpsOPt2,
            cardVpsOPt3,
            cardVpsOPt4,
            cardVpsOPt5,
            cardVpsOPt6,
            priceYearlyInINR,
            priceTwoYearlyInINR,
            priceThreeYearlyInINR,
            priceYearlyInUSD,
            priceTwoYearlyInUSD,
            priceThreeYearlyInUSD,
            priceYearlyInEUR,
            priceTwoYearlyInEUR,
            priceThreeYearlyInEUR,
            title
          }) => (
            <VPSCard
            key={id}
              id={id}
              cardVpsTitle={cardVpsTitle}
              cardVpsSubTitle={cardVpsSubTitle}
              cardAnchorLink={cardAnchorLink}
              cardVpsImg={cardVpsImg}
              cardVpsAltName={cardVpsAltName}
              cardVpsOgPrice={cardVpsOgPrice}
              cardVpsWebSpace={cardVpsWebSpace}
              cardVpsCapacity={cardVpsCapacity}
              cardVpsCapacity2={cardVpsCapacity2}
              cardVpsCapacity3={cardVpsCapacity3}
              cardVpsSnap={cardVpsSnap}
              cardVpsOPt1={cardVpsOPt1}
              cardVpsOPt2={cardVpsOPt2}
              cardVpsOPt3={cardVpsOPt3}
              cardVpsOPt4={cardVpsOPt4}
              cardVpsOPt5={cardVpsOPt5}
              cardVpsOPt6={cardVpsOPt6}
              priceYearlyInINR={priceYearlyInINR}
              priceTwoYearlyInINR={priceTwoYearlyInINR}
              priceThreeYearlyInINR={priceThreeYearlyInINR}
              priceYearlyInUSD={priceYearlyInUSD}
              priceTwoYearlyInUSD={priceTwoYearlyInUSD}
              priceThreeYearlyInUSD={priceThreeYearlyInUSD}
              priceYearlyInEUR={priceYearlyInEUR}
              priceTwoYearlyInEUR={priceTwoYearlyInEUR}
              priceThreeYearlyInEUR={priceThreeYearlyInEUR}
              title={title}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ThirdTabContent;
