import React from "react";
import * as _Builtin from "./_Builtin";

export function AddToCartButton({ as: _Component = _Builtin.Link }) {
  return (
    <_Component
      className="product-details-text add-to-cart"
      button={true}
      block=""
      options={{
        href: "#",
      }}
    >
      {"Add to cart"}
    </_Component>
  );
}
