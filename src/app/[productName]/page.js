"use client";
import "../../../devlink/global.css";
import { Header } from "@/Components/Header";
import { ProductPageElement } from "@/Components/ProductPageElement";
import { HeaderProvider } from "@/Helpers/headerContext";
import { ProductContext, ProductProvider } from "@/Helpers/ProductContext";
import { useContext, useState, useEffect } from "react";

export default function Page() {
  // const { productName } = useContext(ProductContext);
  // const [isProductNameAvailable, setIsProductNameAvailable] = useState(false);

  // useEffect(() => {
  //   setIsProductNameAvailable(!!productName);
  // }, [productName]);

  return (
    <div className="page-wrapper">
      <HeaderProvider>
        <ProductProvider>
          <Header />
          <ProductPageElement nameOfProd="Hello"></ProductPageElement>
        </ProductProvider>
      </HeaderProvider>
    </div>
  );
}
