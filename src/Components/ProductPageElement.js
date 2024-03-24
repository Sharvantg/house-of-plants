import React, { useContext, useEffect } from "react";
import * as _Builtin from "../../devlink/_Builtin";
import { ProductContext } from "@/Helpers/ProductContext";
import { AddToCartButton } from "./AddToCartButton";

export function ProductPageElement({
  as: _Component = _Builtin.Block,
  nameOfProd,
  descOfProd,
  imageOfProd,
  priceOfProd,
}) {
  const { productName, productPrice, productImage } =
    useContext(ProductContext);

  // useEffect(() => {
  //   console.log("productName");
  //   console.log(productName); // This will log the updated productName value
  // }, [productName]);

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
          src={imageOfProd}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className="product-details"
        id="w-node-ea3c1f43-bf62-299b-fbe5-3f5c9ab5141f-9ab5141c"
        tag="div"
      >
        <_Builtin.Heading tag="h2">{nameOfProd}</_Builtin.Heading>
        <_Builtin.Block className="product-desc" tag="div">
          {descOfProd}
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
            {priceOfProd}
          </_Builtin.Block>
          <AddToCartButton />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
