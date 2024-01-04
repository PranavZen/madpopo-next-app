import React from "react";
import BusinessEmailData from "./BusinessEmailData";
import BusinessEmailCard from "@/components/pricecard/BusinessEmailCard";

function BusinessEmailComponent() {
  return (
    <div className="main-homepage-item vpsSevtionWrap">
      <div className="row justify-content-center vpsRow">
        {BusinessEmailData.map(
          ({
            id,
            busEmailTitle,
            busEmailSubTitle,
            cardAnchorLink,
            busEmailImg,
            busEmailAltName,
            busEmailOgPrice,
            busEmailWebSpace,
            busEmailCapacity,
            busEmailCapacity2,
            busEmailCapacity3,
            busEmailSnap,
            busEmailOPt1,
            busEmailOPT2,
            busEmailOPT3,
            busEmailOPT4,
            busEmailOPT5,
            busEmailOPT6,
            priceYearlyInINR,
            priceTwoYearlyInINR,
            priceThreeYearlyInINR,
            priceYearlyInUSD,
            priceTwoYearlyInUSD,
            priceThreeYearlyInUSD,
            priceYearlyInEUR,
            priceTwoYearlyInEUR,
            priceThreeYearlyInEUR,
            width,
            height
          }) => (
            <BusinessEmailCard
              key={id}
              id={id}
              busEmailTitle={busEmailTitle}
              busEmailSubTitle={busEmailSubTitle}
              cardAnchorLink={cardAnchorLink}
              busEmailImg={busEmailImg}
              busEmailAltName={busEmailAltName}
              busEmailOgPrice={busEmailOgPrice}
              busEmailWebSpace={busEmailWebSpace}
              busEmailCapacity={busEmailCapacity}
              busEmailCapacity2={busEmailCapacity2}
              busEmailCapacity3={busEmailCapacity3}
              busEmailSnap={busEmailSnap}
              busEmailOPt1={busEmailOPt1}
              busEmailOPT2={busEmailOPT2}
              busEmailOPT3={busEmailOPT3}
              busEmailOPT4={busEmailOPT4}
              busEmailOPT5={busEmailOPT5}
              busEmailOPT6={busEmailOPT6}
              priceYearlyInINR={priceYearlyInINR}
              priceTwoYearlyInINR={priceTwoYearlyInINR}
              priceThreeYearlyInINR={priceThreeYearlyInINR}
              priceYearlyInUSD={priceYearlyInUSD}
              priceTwoYearlyInUSD={priceTwoYearlyInUSD}
              priceThreeYearlyInUSD={priceThreeYearlyInUSD}
              priceYearlyInEUR={priceYearlyInEUR}
              priceTwoYearlyInEUR={priceTwoYearlyInEUR}
              priceThreeYearlyInEUR={priceThreeYearlyInEUR}
              width={width}
              height={height}
            />
          )
        )}
      </div>
    </div>
  );
}

export default BusinessEmailComponent;
