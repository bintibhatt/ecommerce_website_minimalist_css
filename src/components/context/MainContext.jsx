import React, { createContext, useContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productCart, setProductCart] = useState([]);
  return (
    <MainContext.Provider
      value={{
        categories,
        setCategories,
        productCart,
        setProductCart,
        products,
        setProducts,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export const useMain = () => {
  return useContext(MainContext);
};
