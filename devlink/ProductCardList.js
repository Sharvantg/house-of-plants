import React from "react";
import * as _Builtin from "./_Builtin";

export function ProductCardList({
  as: _Component = _Builtin.Block,
  productCardSlot,
  productFilter = {},
}) {
  return (
    <_Component className="product-list-grid" tag="div" {...productFilter}>
      {productCardSlot ?? (
        <>
          <_Builtin.Block
            className="placeholder"
            id="w-node-_9bf092df-abfa-41cd-b417-85adcb397f17-7f8e6958"
            tag="div"
          />
          <_Builtin.Block
            className="placeholder"
            id="w-node-_3d9c7194-5a73-232a-5919-f8889160f0e7-7f8e6958"
            tag="div"
          />
          <_Builtin.Block
            className="placeholder"
            id="w-node-a68268ad-4693-9161-4697-497eac2f1c09-7f8e6958"
            tag="div"
          />
          <_Builtin.Block
            className="placeholder"
            id="w-node-bdb52c06-f73e-ff58-58f4-e9d5be8d2c06-7f8e6958"
            tag="div"
          />
        </>
      )}
    </_Component>
  );
}
