import * as React from "react";
import * as Types from "./types";

declare function ProductCardList(props: {
  as?: React.ElementType;
  productCardSlot?: Types.Devlink.Slot;
  productFilter?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
