"use client";
import React, { useState } from "react";

function AreaButtons() {
  const [state, setstate] = useState("state1");
  return (
    <>
      {
        // Mobile device buttons
      }
      <div className="mobShowHideButtonWrap">
        <div className="mobBtnsWrap">
          {state === "state1" ? (
            <div
              className={
                state === "state1"
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
              state === "state1"
                ? "mob_btn_circle cir1 active"
                : "mob_btn_circle cir1"
            }
            onClick={() => {
              setstate("state1");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {state === "state2" ? (
            <div
              className={
                state === "state2"
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
              state === "state2"
                ? "mob_btn_circle cir2 active"
                : "mob_btn_circle cir2"
            }
            onClick={() => {
              setstate("state2");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {state === "state3" ? (
            <div
              className={
                state === "state3"
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
              state === "state3"
                ? "mob_btn_circle cir3 active"
                : "mob_btn_circle cir3"
            }
            onClick={() => {
              setstate("state3");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {state === "state4" ? (
            <div
              className={
                state === "state4"
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
              state === "state4"
                ? "mob_btn_circle cir4 active"
                : "mob_btn_circle cir4"
            }
            onClick={() => {
              setstate("state4");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {state === "state5" ? (
            <div
              className={
                state === "state5"
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
              state === "state5"
                ? "mob_btn_circle cir5 active"
                : "mob_btn_circle cir5"
            }
            onClick={() => {
              setstate("state5");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {state === "state6" ? (
            <div
              className={
                state === "state6"
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
              state === "state6"
                ? "mob_btn_circle cir6 active"
                : "mob_btn_circle cir6"
            }
            onClick={() => {
              setstate("state6");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {state === "state7" ? (
            <div
              className={
                state === "state7"
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
              state === "state7"
                ? "mob_btn_circle cir7 active"
                : "mob_btn_circle cir7"
            }
            onClick={() => {
              setstate("state7");
            }}
          ></span>
        </div>
        <div className="mobBtnsWrap">
          {state === "state8" ? (
            <div
              className={
                state === "state8"
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
              state === "state8"
                ? "mob_btn_circle cir8 active"
                : "mob_btn_circle cir8"
            }
            onClick={() => {
              setstate("state8");
            }}
          ></span>
        </div>
      </div>
    </>
  );
}

export default AreaButtons;
