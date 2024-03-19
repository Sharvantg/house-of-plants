import React from "react";
import * as _Builtin from "../../devlink/_Builtin";
import { useContext } from "react";
import { HeaderContext } from "@/Helpers/headerContext";

export function AddToCartButton({ as: _Component = _Builtin.Link }) {
  const { cartCount, setCartCount } = useContext(HeaderContext);

  function updateCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <_Component
      className="product-details-text add-to-cart"
      button={true}
      block=""
      options={{
        href: "#",
      }}
      onClick={updateCart}
    >
      {"Add to cart"}
    </_Component>
  );
}
