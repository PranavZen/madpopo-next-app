import React from "react";

import gbFaqData from "../../Components/GlobalInfra/GBFaqData";
const GBFaqList = () => {
 
  return (

    <ul id="dinamic-filter-list">
      {gbFaqData.map((gbItem) => {
        return (
          <li key={gbItem.id}>
            <a className="animated-link" href={gbItem.faqId}>
              {gbItem.faq} <i className="fa fa-chevron-right"></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default GBFaqList;
