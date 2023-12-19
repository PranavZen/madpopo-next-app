"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function HcPanel({
  label,
  content,
  activeTab,
  index,
  activateTab,
  ankLink,
  id,
}) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = document.querySelector(".panel__inner");
    const scrollHeight = el.scrollHeight;
    setHeight(activeTab === index ? scrollHeight : 0);
  }, [activeTab, index]);

  const isActive = activeTab === index;
  const innerStyle = {
    height: `${isActive ? height : 0}px`,
  };
  return (
    // eslint-disable-next-line jsx-a11y/role-supports-aria-props
    <div className="panel" role="tabpanel" aria-expanded={isActive} id={id}>
      <button className="panel__label" role="tab" onClick={activateTab}>
        {label}
      </button>
      <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
        <div className="accountDetails">
          <table className="account bankdetail table-responsive">
            <tbody>
              <tr>
                <td>
                  <span>Account Name &nbsp; : &nbsp;</span>
                </td>
                <td>Version Next Technologies Pvt. Ltd.</td>
              </tr>
              <tr>
                <td>
                  <span>Account No &nbsp; : &nbsp;</span>
                </td>
                <td>16190200000801</td>
              </tr>
              <tr>
                <td>
                  <span>Bank Name &nbsp; : &nbsp;</span>
                </td>
                <td>Fedral Bank</td>
              </tr>
              <tr>
                <td>
                  <span>Bank Address &nbsp; : &nbsp;</span>
                </td>
                <td>
                  Gala no 8, Sagar Pallazio, Andheri Kurla Link Road, Sakinaka
                  Junction, Andheri (E), Mumbai- 400072
                </td>
              </tr>
              <tr>
                <td>
                  <span>IFSC Code &nbsp; : &nbsp;</span>
                </td>
                <td>FDRL0001619</td>
              </tr>
              <tr>
                <td>
                  <span>Swift Code &nbsp; : &nbsp;</span>
                </td>
                <td>FDRLINBBIBD</td>
              </tr>
            </tbody>
          </table>
          <table className="account upiId">
            <tbody>
              <tr>
                <td>
                  <span>Swift Code &nbsp; : &nbsp;</span>
                </td>
                <td>FDRLINBBIBD</td>
              </tr>
              <tr>
                <td>
                  <span>PayPal ID &nbsp; : &nbsp;</span>
                </td>
                <td>billing@version-next.com</td>
              </tr>
            </tbody>
          </table>
          <table className="account otherdetail">
            <tbody>
              <tr>
                <td>
                  <span>CIN Number &nbsp; : &nbsp;</span>
                </td>
                <td>U72200MH2008PTC182529</td>
              </tr>
              <tr>
                <td>
                  <span>Our PAN Number &nbsp; : &nbsp;</span>
                </td>
                <td>AACCV7580M</td>
              </tr>
              <tr>
                <td>
                  <span>GST Number &nbsp; : &nbsp;</span>
                </td>
                <td>27AACCV7580M1ZN</td>
              </tr>

              <tr>
                <td>
                  <span>Tan Number &nbsp; : &nbsp;</span>
                </td>
                <td>MUMV15923F</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="panel__content">
          {content}{" "}
          <a href={ankLink} className="readMoreQen">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
}

export default HcPanel;
