"use client"
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
function SyncLeftBox(props) {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div
      className="col-md-12 col-lg-12 " 
      data-aos="fade-right"
      data-aos-duration="900"
      data-aos-once="true"
    >
      <div className="main-features-box media">
        <span className="main-features-box-number">{props.buttonNumber}</span>
        <div
          className="media-icon circle-sm
                        btn_circleBg mr-8"
        >
          <span
            className="text-white
                            the-icon"
          >
            {props.buttonIcon}
          </span>
        </div>
        <div className="media-body">
          <h3 className="title mb-2">{props.buttonTitle}</h3>
          <p className="coodiv-text-9 mb-0 btnDescTetx">{props.buttonData1}</p>
        </div>
      </div>
    </div>
  );
}

export default SyncLeftBox;
