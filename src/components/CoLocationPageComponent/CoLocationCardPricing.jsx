import React from "react";
import CoLocationServerData from "./CoLocationServerData";
import CoLocationCard from "./CoLocationCard";

function CoLocationCardPricing() {
  return (
    <div className="main-homepage-item vpsSevtionWrap">
      <div className="row justify-content-center vpsRow">
        {CoLocationServerData.map(
          ({
            id,
            dsCardTitle,
            dsCardSubTitle,
            cardAnchorLink,
            dsCardImg,
            dsCardAltName,
            dsCardOgPrice,
            dsCardWebSpace,
            dsCardCapacity,
            dsCardCapacity2,
            dsCardCapacity3,
            dsCardSnap,
            dsCardOPt1,
            dsCardOPT2,
            dsCardOPT3,
            dsCardOPT4,
            dsCardOPT5,
            dsCardOPT6,
            priceYearlyInINR,
            priceTwoYearlyInINR,
            priceThreeYearlyInINR,
            priceYearlyInUSD,
            priceTwoYearlyInUSD,
            priceThreeYearlyInUSD,
            priceYearlyInEUR,
            priceTwoYearlyInEUR,
            priceThreeYearlyInEUR
          }) => (
            <CoLocationCard
              key={id}
              id={id}
              dsCardTitle={dsCardTitle}
              dsCardSubTitle={dsCardSubTitle}
              cardAnchorLink={cardAnchorLink}
              dsCardImg={dsCardImg}
              dsCardAltName={dsCardAltName}
              dsCardOgPrice={dsCardOgPrice}
              dsCardWebSpace={dsCardWebSpace}
              dsCardCapacity={dsCardCapacity}
              dsCardCapacity2={dsCardCapacity2}
              dsCardCapacity3={dsCardCapacity3}
              dsCardSnap={dsCardSnap}
              dsCardOPt1={dsCardOPt1}
              dsCardOPT2={dsCardOPT2}
              dsCardOPT3={dsCardOPT3}
              dsCardOPT4={dsCardOPT4}
              dsCardOPT5={dsCardOPT5}
              dsCardOPT6={dsCardOPT6}
              priceYearlyInINR={priceYearlyInINR}
              priceTwoYearlyInINR={priceTwoYearlyInINR}
              priceThreeYearlyInINR={priceThreeYearlyInINR}
              priceYearlyInUSD={priceYearlyInUSD}
              priceTwoYearlyInUSD={priceTwoYearlyInUSD}
              priceThreeYearlyInUSD={priceThreeYearlyInUSD}
              priceYearlyInEUR={priceYearlyInEUR}
              priceTwoYearlyInEUR={priceTwoYearlyInEUR}
              priceThreeYearlyInEUR={priceThreeYearlyInEUR}
            />
          )
        )}
      </div>
    </div>
  );
}

export default CoLocationCardPricing;
