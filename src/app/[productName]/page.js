"use client";
import "../../../devlink/global.css";
import { Header } from "@/Components/Header";
import { ProductPageElement } from "@/Components/ProductPageElement";
import { HeaderProvider } from "@/Helpers/headerContext";
import { ProductContext } from "@/Helpers/ProductContext";
import { useContext } from "react";

export default function Page() {
  const { productName, productPrice, productImage } =
    useContext(ProductContext);

  return (
    <div className="page-wrapper">
      <HeaderProvider>
        <Header></Header>
        <ProductContext.Provider
          value={{ productName, productPrice, productImage }}
        >
          <ProductPageElement></ProductPageElement>
        </ProductContext.Provider>
      </HeaderProvider>
    </div>
  );
}
