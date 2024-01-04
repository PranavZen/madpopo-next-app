import Image from "next/image";
import Link from "next/link";
import React from "react";

function Migration() {
  return (
    <section className="ddos-attack-section pt-12 pb-12">
      <div className="container">
        <div className="safari-browser-mockup position-relative">
          <div className="topLeftIco"></div>
          <div className="topRightIco"></div>
          <div className="btnRightIco"></div>
          <Image
            decoding="async"
            className="w-100"
            src="image/pages/safari-browser.svg"
            alt="safari search bar"
            width={1110}
            height={833}
          />
          <div className="ddos-attack-mockup">
            <div className="ddos-attack-main-text text-center pt-lg-12 pt-10 px-5 dark-mode-texts position-relative coodiv-z-index-1">
              <h5 className="coodiv-text-4 windowTitle">
                Free WordPress Migration
              </h5>
              <p className="coodiv-text-11 wondowDecs px-lg-25 px-10 mb-9">
                We understand that changing hosting providers can be a hassle,
                which is why we're thrilled to offer unlimited migrations of
                your WordPress site from any hosting provider without any
                downtime or data loss.
              </p>
              <Link
                href="/wordpress-hosting"
                className="get_stardetWindowBtn coodiv-text-9 rounded-20"
              >
                Get started
              </Link>
            </div>
            <Image
              className="main-ddos-attack-charactuer"
              src="/image/migrationmeeting.webp"
              alt="office"
              width={385}
              height={303}
              priority
            />
            <Image
              className="wp-floting-img"
              src="/image/wordpress/wp-3d-logo.webp"
              alt="wordpress"
              width={195}
              height={195}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Migration;
