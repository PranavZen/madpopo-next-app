import React from 'react'
import PriceCardBox from '../PriceCardBox';
import pricingSEctionData2 from '../tabs/tabcontentbox/PriceCardDataTwo';
function WordpressHostingPriceCard() {
    
  const mainDataPricing2 = pricingSEctionData2.mainDataPricing;
  return (
    <div className="container coodiv-z-index-1 position-relative firstSliderPadding Word_host_price_Sec">
        <div className="row align-items-center justify-content-center ddosPriceCardRow">
          {mainDataPricing2.map(
            ({
              id,
              label, 
              cardTitle,
              cardPrice1,
              cardOffer,
              cardCapacity,
              cardSSHAccess,
              cardDDOS,
              cardPrice2,
              cardPrice3,
              wpWeeklyBckp,
              cardSubTitle,
              buyBtnLink
            }) => (
              <PriceCardBox
                key={id}
                id={id}
                label={label}
                cardTitle={cardTitle}
                cardPrice1={cardPrice1}
                cardPrice2={cardPrice2}
                cardPrice3={cardPrice3}
                cardOffer={cardOffer}
                cardCapacity={cardCapacity}
                cardSSHAccess={cardSSHAccess}
                cardDDOS={cardDDOS}
                wpWeeklyBckp={wpWeeklyBckp}
                cardSubTitle={cardSubTitle}
                buyBtnLink={buyBtnLink}
              />
            )
          )}
        </div>
      </div>
  )
}

export default WordpressHostingPriceCard