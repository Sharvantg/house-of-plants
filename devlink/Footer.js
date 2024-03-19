import React from "react";
import * as _Builtin from "./_Builtin";

export function Footer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className="footer" tag="footer">
      <_Builtin.Block className="container-large" tag="div">
        <_Builtin.Heading
          className="heading-1 align-center text-color-white"
          tag="h1"
        >
          {"Follow us"}
        </_Builtin.Heading>
        <_Builtin.Block className="footer-image-wrapper" tag="div">
          <_Builtin.Image
            className="footer-images _1"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65f5a1e5ea332f6db536e296/65f6b3dc2fada763e518445f_Diamond-Pot-1-486886_525x700.webp"
          />
          <_Builtin.Image
            className="footer-images _2"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65f5a1e5ea332f6db536e296/65f6b3dc6c7db01c714dfbda_original_couples-set-of-two-personalised-terracotta-plant-pots.jpg"
          />
          <_Builtin.Image
            className="footer-images _3"
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65f5a1e5ea332f6db536e296/65f6b3dc3750bb4054eea6ed_Swing_Planter_-_2.webp"
          />
        </_Builtin.Block>
        <_Builtin.Block className="footer-background" tag="div" />
        <_Builtin.Block className="footer-details" tag="div">
          <_Builtin.Block tag="div">
            <_Builtin.Block className="logo-text" tag="div">
              {"House of Plants"}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.Block className="text-color-white" tag="div">
              {"contacts@houseofplants.com"}
            </_Builtin.Block>
            <_Builtin.Block className="text-color-white" tag="div">
              {"+91-9314145123"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
