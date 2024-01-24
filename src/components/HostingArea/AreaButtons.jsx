"use client";
import React, { useEffect, useState } from "react";
async function nearestCountry(ip) {
  try {
    const request = await fetch(
      `https://ipinfo.io/${ip}/json?token=793eb20d45d707`
    );
    const jsonResponse = await request.json();
    return jsonResponse.country.toLowerCase();
  } catch (error) {
    console.error("Error fetching geolocation data:", error);
    return null;
  }
}

function AreaButtons() {
  const [countryState, setCountryState] = useState(null);
  const [ipaddress, setIpAddress] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          "https://ipinfo.io/json?token=793eb20d45d707"
        );
        const jsonResponse = await request.json();
        setIpAddress(jsonResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const setDefaultCountry = async () => {
      if (ipaddress && ipaddress.country) {
        // Check if the country is in the listed countries
        const listedCountries = ["in", "sg", "de", "gb", "us", "au"];
        if (listedCountries.includes(ipaddress.country.toLowerCase())) {
          // Set the corresponding state for listed countries
          switch (ipaddress.country.toLowerCase()) {
            case "in":
              setCountryState("state1");
              break;
            case "sg":
              setCountryState("state2");
              break;
            case "de":
              setCountryState("state3");
              break;
            case "gb":
              setCountryState("state4");
              break;
            case "us":
              setCountryState("state5");
              break;
            case "au":
              setCountryState("state8");
              break;
            // Add more cases for other countries as needed
            default:
              setCountryState("state1"); // Set a default state if the country is not recognized
          }
        } else {
          // Country is not in the list, set default based on nearest IP
          const defaultCountry = await nearestCountry(ipaddress.ip);
          if (defaultCountry) {
            setCountryState(`state${defaultCountry}`);
          }
        }
      }
    };

    setDefaultCountry();
  }, [ipaddress]);

  if (countryState === null) {
    // Handle the case where the countryState is not determined yet
    return <div>Loading...</div>;
  }
  return (
    <>
      {
        // Mobile device buttons
      }
      <div className="mobShowHideButtonWrap">
        <div className="mobBtnsWrap">
          {countryState === "state1" ? (
            <div
              className={
                countryState === "state1"
                  ? "mob_btn_1 code1 active"
                  : "mob_btn_1 code1"
              }
            >
              <span className="coodiv-text-12">
                India<small>Mumbai</small>
              </span>
              <i className="network-country-bottom-border"></i>
            </div>
          ) : (
            ""
          )}
          <span
            className={
              countryState === "state1"
                ? "mob_btn_circle cir1 active"
                : "mob_btn_circle cir1"
            }
            onClick={() => {
              setCountryState("state1");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {countryState === "state2" ? (
            <div
              className={
                countryState === "state2"
                  ? "mob_btn_1 code2 active"
                  : "mob_btn_1 code2"
              }
            >
              <span className="coodiv-text-12">
                Asia<small>Singapore</small>
              </span>
              <i className="network-country-bottom-border"></i>
            </div>
          ) : (
            ""
          )}
          <span
            className={
              countryState === "state2"
                ? "mob_btn_circle cir2 active"
                : "mob_btn_circle cir2"
            }
            onClick={() => {
              setCountryState("state2");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {countryState === "state3" ? (
            <div
              className={
                countryState === "state3"
                  ? "mob_btn_1 code3 active"
                  : "mob_btn_1 code3"
              }
            >
              <span className="coodiv-text-12">
                European Union<small>Germany</small>
              </span>
              <i className="network-country-bottom-border"></i>
            </div>
          ) : (
            ""
          )}
          <span
            className={
              countryState === "state3"
                ? "mob_btn_circle cir3 active"
                : "mob_btn_circle cir3"
            }
            onClick={() => {
              setCountryState("state3");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {countryState === "state4" ? (
            <div
              className={
                countryState === "state4"
                  ? "mob_btn_1 code4 active"
                  : "mob_btn_1 code4"
              }
            >
              <span className="coodiv-text-12">
                UK<small>London</small>
              </span>
              <i className="network-country-bottom-border"></i>
            </div>
          ) : (
            ""
          )}
          <span
            className={
              countryState === "state4"
                ? "mob_btn_circle cir4 active"
                : "mob_btn_circle cir4"
            }
            onClick={() => {
              setCountryState("state4");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {countryState === "state5" ? (
            <div
              className={
                countryState === "state5"
                  ? "mob_btn_1 code5 active"
                  : "mob_btn_1 code5"
              }
            >
              <span className="coodiv-text-12">
                USA<small>East</small>
              </span>
              <i className="network-country-bottom-border"></i>
            </div>
          ) : (
            ""
          )}
          <span
            className={
              countryState === "state5"
                ? "mob_btn_circle cir5 active"
                : "mob_btn_circle cir5"
            }
            onClick={() => {
              setCountryState("state5");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {countryState === "state6" ? (
            <div
              className={
                countryState === "state6"
                  ? "mob_btn_1 code6 active"
                  : "mob_btn_1 code6"
              }
            >
              <span className="coodiv-text-12">
                USA<small>West</small>
              </span>
              <i className="network-country-bottom-border"></i>
            </div>
          ) : (
            ""
          )}
          <span
            className={
              countryState === "state6"
                ? "mob_btn_circle cir6 active"
                : "mob_btn_circle cir6"
            }
            onClick={() => {
              setCountryState("state6");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {countryState === "state7" ? (
            <div
              className={
                countryState === "state7"
                  ? "mob_btn_1 code7 active"
                  : "mob_btn_1 code7"
              }
            >
              <span className="coodiv-text-12">
                USA<small>Central</small>
              </span>
              <i className="network-country-bottom-border"></i>
            </div>
          ) : (
            ""
          )}
          <span
            className={
              countryState === "state7"
                ? "mob_btn_circle cir7 active"
                : "mob_btn_circle cir7"
            }
            onClick={() => {
              setCountryState("state7");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {countryState === "state8" ? (
            <div
              className={
                countryState === "state8"
                  ? "mob_btn_1 code8 active"
                  : "mob_btn_1 code8"
              }
            >
              <span className="coodiv-text-12">
                Australia<small>Canberra</small>
              </span>
              <i className="network-country-bottom-border"></i>
            </div>
          ) : (
            ""
          )}
          <span
            className={
              countryState === "state8"
                ? "mob_btn_circle cir8 active"
                : "mob_btn_circle cir8"
            }
            onClick={() => {
              setCountryState("state8");
            }}
          ></span>
        </div>
      </div>
    </>
  );
}

export default AreaButtons;
