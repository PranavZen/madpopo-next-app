import React from "react";
import gbFaqResData from "../../Components/GlobalInfra/GBFaqResData";
function GBFaqRes() {
  return (
    <ul className="questions-reponses-list list-group pl-14">
      {gbFaqResData.map((gbresI) => {
        return (
          <li id={gbresI.faqId} key={gbresI.id}>
            <h6>{gbresI.faq}</h6>
            <p className="coodiv-text-11">{gbresI.respara1}</p>
            <p className="coodiv-text-11">{gbresI.respara2}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default GBFaqRes;
