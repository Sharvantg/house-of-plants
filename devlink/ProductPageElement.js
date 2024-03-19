import React from "react";
import * as _Builtin from "./_Builtin";
import { AddToCartButton } from "./AddToCartButton";

export function ProductPageElement({
  as: _Component = _Builtin.Block,
  nameOfProd = "Name of the product",
  productDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
}) {
  return (
    <_Component className="product-page-hero" tag="div">
      <_Builtin.Block
        className="product-media"
        id="w-node-ea3c1f43-bf62-299b-fbe5-3f5c9ab5141d-9ab5141c"
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/65f5a1e5ea332f6db536e296/65f71c6855defa60af909ee3_plant_image_1-removebg-preview%20(1).png"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className="product-details"
        id="w-node-ea3c1f43-bf62-299b-fbe5-3f5c9ab5141f-9ab5141c"
        tag="div"
      >
        <_Builtin.Heading tag="h2">{nameOfProd}</_Builtin.Heading>
        <_Builtin.Block className="product-desc" tag="div">
          {productDesc}
        </_Builtin.Block>
        <_Builtin.Block className="size-wrapper" tag="div">
          <_Builtin.Block className="text-size-regular" tag="div">
            {"small"}
          </_Builtin.Block>
          <_Builtin.Block className="text-size-regular" tag="div">
            {"medium"}
          </_Builtin.Block>
          <_Builtin.Block
            className="text-size-small text-size-regular"
            tag="div"
          >
            {"large"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className="price-and-addtocart" tag="div">
          <_Builtin.Block className="product-price" tag="div">
            {"₹200"}
          </_Builtin.Block>
          <AddToCartButton />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
