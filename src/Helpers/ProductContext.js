import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext({
  productName: "",
  productPrice: 0,
  productImage: "",
  setProductDetails: () => {},
});

export const ProductProvider = ({ children }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState("");

  useEffect(() => {
    console.log("Updated productName:", productName);
  }, [productName]);

  const setProductDetails = (name, price, image) => {
    setProductName(name);
    setProductPrice(price);
    setProductImage(image);
  };

  return (
    <ProductContext.Provider
      value={{
        productName,
        productPrice,
        productImage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
