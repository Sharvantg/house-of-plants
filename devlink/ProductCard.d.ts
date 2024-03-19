import * as React from "react";
import * as Types from "./types";

declare function ProductCard(props: {
  as?: React.ElementType;
  productName?: React.ReactNode;
  productPrice?: React.ReactNode;
  productImage?: Types.Asset.Image;
  productImageAltText?: Types.Basic.AltText;
}): React.JSX.Element;
