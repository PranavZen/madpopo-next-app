import Image from "next/image";
import React from "react";

function MaximizeSection() {
  return (
    <section className="web_speed_section globalWave">
      <div className="container">
        <div className="webSpeedWrap">
          <div className="col-md-6 leftCstmWidth">
            <div className="webSpeedImgWrap">
              <Image
                src="/image/popo-site-load-test_1-80.webp"
                alt="Web Speed"
                width={547}
                height={386}
                priority
              />
            </div>
          </div>
          <div className="col-md-6 rightCstmWidth">
            <div className="webSpeedDataWrap">
              <div className="webSpeedSectionTitle">
                <h3>Faster Website is Better</h3>
              </div>
              <ul className="webSpeedList">
                <li>
                  <span>
                    <i className="feather icon-check"></i>
                  </span>{" "}
                  <p>
                    Maximize performance with LiteSpeed Web Server technology.
                  </p>
                </li>
                <li>
                  <span>
                    <i className="feather icon-check"></i>
                  </span>{" "}
                  <p>
                    Route your traffic on Cloudflare and take advantage of DDoS,
                    DNS, and integrated WAF
                  </p>
                </li>
                <li>
                  <span>
                    <i className="feather icon-check"></i>
                  </span>{" "}
                  <p>
                    Enjoy optimized performance with advanced cache solutions.
                  </p>
                </li>
                <li>
                  <span>
                    <i className="feather icon-check"></i>
                  </span>{" "}
                  <p>
                    Host your cloud server in any of our Data center locations:
                    USA, United Kingdom, Singapore, Germany,
                    India, and the Sydney.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaximizeSection;
