import React, { useContext } from "react";
import { ProductCard } from "./ProductCard";
import * as _Builtin from "../../devlink/_Builtin";
import { plants } from "@/Helpers/PlantData";

export function ProductCardList({
  as: _Component = _Builtin.Block,
  productCardSlot,
  productFilter = {},
}) {
  return (
    <_Builtin.NavbarContainer className="container-large" tag="div">
      <_Component className="product-list-grid" tag="div" {...productFilter}>
        {plants.map((plant, index) => (
          <ProductCard
            key={index}
            name={plant.name}
            price={plant.price}
            image={plant.image}
            productImageAltText="null"
          />
        ))}
      </_Component>
    </_Builtin.NavbarContainer>
  );
}
