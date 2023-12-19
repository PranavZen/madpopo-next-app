import React from "react";
import domainListData from "../../Components/DomainTableList/DomainListTableData";
import DomainTableRows from "./DomainTableRows";
function DomainTableList(props) {
  return (
    <table className="table mt-12">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th> 
          <th scope="col">Domains (per year)</th>
          <th scope="col">Register per year</th>
          <th scope="col">Renew per year</th>
          <th scope="col">Transfer per year</th>
        </tr>
      </thead>
      <tbody>
        {domainListData.map((domItem) => {
          return (
            <DomainTableRows
              key={domItem.id}
              id={domItem.id}
              domainName={domItem.domainName}
              domainRgister={domItem.domainRgister}
              domainRenew={domItem.domainRenew}
              domainTransfer={domItem.domainTransfer}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default DomainTableList;
