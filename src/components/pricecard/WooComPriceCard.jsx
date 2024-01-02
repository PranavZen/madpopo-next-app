
import woocomPriceData from './woocomPriceData';
import PriceCardBoxWoo from '../PriceCardBoxWoo';
function WooComPriceCard() {
    
  const mainDataPricing2 = woocomPriceData.mainDataPricing;
  return (
    <div className="container coodiv-z-index-1 position-relative firstSliderPadding Word_host_price_Sec 23">
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
              cardSubTitle
            }) => (
              <PriceCardBoxWoo
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
              />
            )
          )}
        </div>
      </div>
  )
}

export default WooComPriceCard