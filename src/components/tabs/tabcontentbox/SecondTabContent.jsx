import React from "react";
import LinuxData from "./hostingpalndata/LinuxHostingData";
import LinuxCardBox from "./hostingpalndata/LinuxCardBox";
function SecondTabContent() {
  return (
    <div className="main-homepage-item">
      <div className="row justify-content-center px-md-2 linuxHostingCardWrap">
        {LinuxData.map(
          ({
            id,
            cardlinuxTitle,
            Linkss,
            cardlinuxSubTitle,
            cardlinuxOgPrice,
            cardlinuxOffer,
            cardlinuxCapacity,
            cardlinuxSSHAccess,
            cardlinuxOPt1,
            cardlinuxOPT2,
            cardlinuxOPT3,
            cardlinuxOPT4,
            cardlinuxOPT5,
            cardlinuxOPT6,
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
            <LinuxCardBox
              key={id}
              id={id}
              cardlinuxTitle={cardlinuxTitle}
              Linkss={Linkss}
              cardlinuxSubTitle={cardlinuxSubTitle}
              cardlinuxOgPrice={cardlinuxOgPrice}
              cardlinuxOffer={cardlinuxOffer}
              cardlinuxCapacity={cardlinuxCapacity}
              cardlinuxSSHAccess={cardlinuxSSHAccess}
              cardlinuxOPt1={cardlinuxOPt1}
              cardlinuxOPT2={cardlinuxOPT2}
              cardlinuxOPT3={cardlinuxOPT3}
              cardlinuxOPT4={cardlinuxOPT4}
              cardlinuxOPT5={cardlinuxOPT5}
              cardlinuxOPT6={cardlinuxOPT6}
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

export default SecondTabContent;
