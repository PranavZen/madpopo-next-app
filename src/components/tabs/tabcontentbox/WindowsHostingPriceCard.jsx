import React from 'react'
import WindowsHostingDatas from './hostingpalndata/WindowsHostingData'
import WindowsPricingCardBox from './WindowsPricingCardBox'

function WindowsHostingPriceCard(props) {
    
  return (
    <div className="container coodiv-z-index-1 position-relative firstSliderPadding Word_host_price_Sec">
        <div className="row align-items-center justify-content-center ddosPriceCardRow blueCard">
          {WindowsHostingDatas.map(
            ({
              id,
              label,  
              winHostTitle, 
              winHostSubTitle,
              winHostOgPrice,
              cardPrice1,
              cardPrice2,
              cardPrice3,
              winHostOffer,
              winHostCapacity,
              winHostSSHAccess,
              winHostDDOS,
              winHNode,
              winHWeeklyBckp,
              winHostDiscPrice,
              winHOPt1,
              winHOPt2,
              winHOPt3,
              winHOPt4,
              winHOPt5,
              winHOPt6,
              winHostAnchor,
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
              <WindowsPricingCardBox
                key={id}
                id={id}
                label={label}
                winHostTitle={winHostTitle}
                winHostOgPrice={winHostOgPrice}
                winHostSubTitle={winHostSubTitle}
                cardPrice1={cardPrice1}
                cardPrice2={cardPrice2}
                cardPrice3={cardPrice3}
                winHostOffer={winHostOffer}
                winHostCapacity={winHostCapacity}
                winHostSSHAccess={winHostSSHAccess}
                winHostDDOS={winHostDDOS}
                winHNode={winHNode}
                winHWeeklyBckp={winHWeeklyBckp}
                winHostDiscPrice={winHostDiscPrice} 
                winHOPt1={ winHOPt1}
                winHOPt2={ winHOPt2}
                winHOPt3={ winHOPt3}
                winHOPt4={ winHOPt4}
                winHOPt5={ winHOPt5}
                winHOPt6={ winHOPt6}
                winHostAnchor={winHostAnchor}
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

  )
}

export default WindowsHostingPriceCard