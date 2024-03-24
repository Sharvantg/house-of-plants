import React from "react";
import * as _Builtin from "../../devlink/_Builtin";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { ProductContext } from "@/Helpers/ProductContext";
import { AddToCartButton } from "./AddToCartButton";
import { useRouter } from "next/router"; // if you use pages dir

export function ProductCard({
  as: _Component = _Builtin.Block,
  name,
  price,
  image,
}) {
  const {
    setProductDetails,
    setProductName,
    setProductPrice,
    setProductImage,
  } = useContext(ProductContext);

  function updateCart() {
    setCartCount(cartCount + 1);
  }

  const clickedOnProduct = () => {
    setProductName("This Is a Name");
    setProductPrice(0);
    setProductImage("Image");
    // setProductDetails("thisIsAName", 123, "image");
  };

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
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block className="plant-details-holder" tag="div">
        <Link href={`/${name}`} onClick={clickedOnProduct}>
          <_Builtin.Block className="product-details-text" tag="div">
            {name}
          </_Builtin.Block>
        </Link>
        <_Builtin.Block className="product-details-text price" tag="div">
          {price}
        </_Builtin.Block>

        <AddToCartButton></AddToCartButton>
        {/* <button
          className="product-details-text add-to-cart"
          button={true}
          block=""
          onClick={handleClick}
        >
          {"Add to cart"}
        </button> */}
      </_Builtin.Block>
    </_Component>
  );
}
