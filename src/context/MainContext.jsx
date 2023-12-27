import React, { createContext, useContext, useState } from "react";

const MainContext = createContext();

export function MainProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [productCart, setProductCart] = useState([]);
  return (
    <div>
      <MainContext.Provider
        value={{ categories, setCategories, productCart, setProductCart }}
      >
        {children}
      </MainContext.Provider>
    </div>
  );
}

export const useMain = () => {
  return useContext(MainContext);
};
