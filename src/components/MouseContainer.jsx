'use client'
import Image from "next/image";
import React from "react";
import {
    MouseParallaxChild,
    MouseParallaxContainer,
  } from "react-parallax-mouse";
function MouseContainer(props) {
  return (
    <MouseParallaxContainer className={"wp_outerBox"}>
      <MouseParallaxChild
        factorX={0.04}
        factorY={0.04}
        className={props.clsName}
      >
        <Image
          src={props.imgUrl}
          alt="Wordpress Logo"
          width={props.width}
          height={props.height}
        />
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}

export default MouseContainer;
