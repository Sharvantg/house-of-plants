import React from "react";
import * as _Builtin from "./_Builtin";

export function ProductCard({
  as: _Component = _Builtin.Block,
  productName = "Product name",
  productPrice = "₹200",
  productImage = "https://uploads-ssl.webflow.com/65f5a1e5ea332f6db536e296/65f68ad8102b1cbeb6561aac_plant%20image%201.png",
  productImageAltText = "__wf_reserved_inherit",
}) {
  return (
    <_Component
      className="product-card"
      id="w-node-_785d57b3-ea98-3c6b-0041-2f38e3eedb13-e3eedb13"
      tag="div"
    >
      <_Builtin.Block className="product-image-wrapper" tag="div">
        <_Builtin.Image
          className="product-image"
          loading="lazy"
          width="auto"
          height="auto"
          src={productImage}
        />
      </_Builtin.Block>
      <_Builtin.Block className="plant-details-holder" tag="div">
        <_Builtin.Block className="product-details-text" tag="div">
          {productName}
        </_Builtin.Block>
        <_Builtin.Block className="product-details-text price" tag="div">
          {productPrice}
        </_Builtin.Block>
        <_Builtin.Link
          className="product-details-text add-to-cart"
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Add to cart"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
