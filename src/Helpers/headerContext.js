import React, { createContext, useState } from "react";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <HeaderContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </HeaderContext.Provider>
  );
};
