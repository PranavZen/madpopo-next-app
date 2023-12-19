"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function CheckerApp() {
  const [domainName, setDomainName] = useState("");
  const [whoisData, setWhoisData] = useState("");
  const [showBox, setshowBox] = useState(false);
  const [verifed, setverifed] = useState(false);
  const testSiteKey = "6Lc7Ze8lAAAAALRp1WYcyt_QvdI7dnWwZsAf-XB6";
  function onRecaptchaChange(value) {
    // console.log("Captcha value:", value);
    setverifed(true);
    // queryWhois();
  }
  async function queryWhois() {
    const response = await fetch(
      `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=at_T9O1Y62TavHWHRBE1IJiM6qJhqQso&domainName=${domainName}`,
      {
        headers: {
          Accept: "application/xml",
        },
      }
    );
    // console.log(response);

    const data = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
    const json = xmlToJson(xml);
    // console.log(json.WhoisRecord.registryData.rawText["#text"]["@text"]);
    const whoisData = json.WhoisRecord.registryData.rawText["#text"]["@text"];
    //   const datas = json.WhoisRecord.rawText["#text"]["@text"];

    if (whoisData === showBox) {
      setshowBox(false);
    } else {
      setshowBox(true);
    }
    setWhoisData(whoisData);
  }
  function xmlToJson(xml) {
    const obj = {};

    if (xml.nodeType === 1) {
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (let i = 0; i < xml.attributes.length; i++) {
          const attribute = xml.attributes.item(i);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) {
      obj["@text"] = xml.nodeValue;
    }
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;

        if (typeof obj[nodeName] === "undefined") {
          obj[nodeName] = xmlToJson(item);
        } else {
          if (typeof obj[nodeName].push === "undefined") {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }

          obj[nodeName].push(xmlToJson(item));
        }
      }
    }

    return obj;
  }

  return (
    <>
      <div className="checkerFormWrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="whoisCHeckerForm">
                <input
                  type="text"
                  placeholder="Enter a domain name to search"
                  value={domainName}
                  onChange={(event) => setDomainName(event.target.value)}
                />
                <div className="captcta">
                  <ReCAPTCHA
                    sitekey={testSiteKey}
                    onChange={onRecaptchaChange}
                  />
                </div>
                <button onClick={queryWhois} disabled={!verifed}>
                  Check WHOIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={showBox ? "checkerReusltBox d-block" : "checkerReusltBox d-none"}
      >
        <div className="container">
          <div className="resutltBoxTitle">
            <h3>WHOIS search results</h3>
          </div>
          <div className="row">
            <div className="whoisDataWrap col-md-10">
              {whoisData.split("\n").map((line, index) => (
                <p key={index} className="resultData">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckerApp;
