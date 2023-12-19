
import React from "react";
import JobData from "./JobData";
import Link from "next/link";

function JobTable() {
  return (
    <div className="jobOpeningTableWrap">
      <div className=" jobTable">
        <h3>Current Job Openings</h3>
        <table className="table mt-10 mobTable">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Position</th>
              <th scope="col">Department</th>
              <th scope="col">Location</th>
              <th scope="col">Employment</th>
            </tr>
          </thead>
          <tbody>
            {JobData.map((domItem) => {
              return (
                <tr key={domItem.id}>
                  <Link href={`/career/${domItem.jdUrlName}`}>
                    <td>{domItem.techName}</td>
                    <td>{domItem.techDepartment}</td>
                    <td>{domItem.jobLocation}</td>
                    <td>{domItem.jobTime}</td>
                  </Link>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobTable;
