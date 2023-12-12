import PriceCardBox from "@/components/PriceCardBox";
import React from "react";
import pricingSEctionData from "./PricingCardData";
function Pricecard(props) { 
  const mainDataPricing = pricingSEctionData.mainDataPricing;
  return (
    <div className="container coodiv-z-index-1 position-relative firstSliderPadding">
      <div className="row align-items-center justify-content-center ddosPriceCardRow">
        {mainDataPricing.map(
          ({
            id,
            label,
            cardTitle, 
            cardSubTitle,
            cardPrice1,
            cardOffer,
            cardCapacity,
            cardSSHAccess,
            cardDDOS,
            cardPrice2,
            cardPrice3,
            cardOgPrice,
            wpNode,
            wpWeeklyBckp,
            cardAnchorLink,
            buyBtnLink
            
          }) => (
            <PriceCardBox
              key={id}
              id={id}
              label={label}
              cardTitle={cardTitle}
              cardSubTitle={cardSubTitle}
              cardOgPrice={cardOgPrice}
              cardPrice1={cardPrice1}
              cardPrice2={cardPrice2}
              cardPrice3={cardPrice3}
              cardOffer={cardOffer}
              cardCapacity={cardCapacity}
              cardSSHAccess={cardSSHAccess}
              cardDDOS={cardDDOS}
              wpNode={wpNode}
              wpWeeklyBckp={wpWeeklyBckp}
              cardAnchorLink={cardAnchorLink}
              buyBtnLink={buyBtnLink}
              
            />
          )
        )}
      </div>
    </div>
  );
}

export default Pricecard;
