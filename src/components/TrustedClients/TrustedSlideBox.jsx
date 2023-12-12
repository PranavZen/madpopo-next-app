import React from "react";
import Image from "next/image";

function TrustedSlideBox(props) {
  return (
    <div className="sliderBoxWrap">
      <div className="clintProfile">
        <Image
          src="/image/avtar.webp"
          alt="Client Pictures"
          width={70}
          height={96}
        />
      </div>
      <h3>{props.clientName}</h3>
      <p>{props.clientDescription}</p>
      <div className="clientTestimonial">
        <p>{props.clientPara}</p>
      </div>
    </div>
  );
}

export default TrustedSlideBox;
