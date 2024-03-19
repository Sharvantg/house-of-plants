import React, { createContext, useState } from "react";

export const ProductContext = createContext({
  productName: "",
  productPrice: 0,
  productImage: "",
});

export const ProductProvider = ({ children }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");

  const setProductDetails = (name, price, description) => {
    setProductName(name);
    setProductPrice(price);
    setProductDescription(description);
  };

  return (
    <ProductContext.Provider
      value={{
        productName,
        productPrice,
        productDescription,
        setProductDetails,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
