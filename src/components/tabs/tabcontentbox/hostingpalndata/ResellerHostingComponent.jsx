import React from "react";
import ResellerHostingData from "./ResellerHostingData";
import ResellerHostingCard from "@/components/pricecard/ResellerHostingCard";

function ResellerHostingComponent() {
  return (
    <div className="main-homepage-item vpsSevtionWrap">
      <div className="row justify-content-center vpsRow">
        {ResellerHostingData.map(
          ({
            id,
            resellerHostTitle,
            resellerHostSubTitle,
            cardAnchorLink,
            resellerHostImg,
            resellerHostAltName,
            resellerHostOgPrice,
            resellerHostWebSpace,
            resellerHostCapacity,
            resellerHostCapacity2,
            resellerHostCapacity3,
            resellerHostSnap,
            resellerHostOPt1,
            resellerHostOPT2,
            resellerHostOPT3,
            resellerHostOPT4,
            resellerHostOPT5,
            resellerHostOPT6,
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
            height,
          }) => (
            <ResellerHostingCard
              key={id}
              id={id}
              resellerHostTitle={resellerHostTitle}
              resellerHostSubTitle={resellerHostSubTitle}
              cardAnchorLink={cardAnchorLink}
              resellerHostImg={resellerHostImg}
              resellerHostAltName={resellerHostAltName}
              resellerHostOgPrice={resellerHostOgPrice}
              resellerHostWebSpace={resellerHostWebSpace}
              resellerHostCapacity={resellerHostCapacity}
              resellerHostCapacity2={resellerHostCapacity2}
              resellerHostCapacity3={resellerHostCapacity3}
              resellerHostSnap={resellerHostSnap}
              resellerHostOPt1={resellerHostOPt1}
              resellerHostOPT2={resellerHostOPT2}
              resellerHostOPT3={resellerHostOPT3}
              resellerHostOPT4={resellerHostOPT4}
              resellerHostOPT5={resellerHostOPT5}
              resellerHostOPT6={resellerHostOPT6}
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

export default ResellerHostingComponent;
