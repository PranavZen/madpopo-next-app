import React, { useEffect, useState } from "react";
import domainListData from "./DomainListTableData";

function DomainTableRows(props) {
  var bydefaultCurrency = "₹";

  const [selectedCountry, setSelectedCountry] = useState(bydefaultCurrency);
 
  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [selectedCountry]);
  if (selectedCountry === "₹") {
    var rg = (domainListData[props.id - 1].domainRgister * 88.55).toFixed(2);
    var rn = (domainListData[props.id - 1].domainRenew * 88.55).toFixed(2);
    var rt = (domainListData[props.id - 1].domainTransfer * 88.55).toFixed(2);
  } else if (selectedCountry === "$") {
    var rg1 = domainListData[props.id - 1].domainRgister;
    var rn1 = domainListData[props.id - 1].domainRenew;
    var rt1 = domainListData[props.id - 1].domainTransfer;
  } else if (selectedCountry === "€") {
    var rg2 = (domainListData[props.id - 1].domainRgister * 0.93).toFixed(2);
    var rn2 = (domainListData[props.id - 1].domainRenew * 0.93).toFixed(2);
    var rt2 = (domainListData[props.id - 1].domainTransfer * 0.93).toFixed(2);
  }
  return (
    <tr key={props.id}>
      <th scope="row">{props.id}</th>
      <td>{props.domainName}</td>
      <td>
        {selectedCountry ? selectedCountry : bydefaultCurrency}
        {selectedCountry ? rg || rg1 || rg2 : selectedCountry}
      </td>
      <td>
        {selectedCountry ? selectedCountry : bydefaultCurrency}
        {selectedCountry ? rn || rn1 || rn2 : selectedCountry}
      </td>
      <td>
        {selectedCountry ? selectedCountry : bydefaultCurrency}
        {selectedCountry ? rt || rt1 || rt2 : selectedCountry}
      </td>
    </tr>
  );
}

export default DomainTableRows;
