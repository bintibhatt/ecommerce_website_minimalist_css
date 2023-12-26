import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllProducts from "./components/products/AllProducts";
import ProductCategory from "./components/products/ProductCategory";

function MainPage() {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme ? `Container Container-light` : `Container Container-dark`
      }
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<AllProducts />} />
          <Route
            path="/products/category/:pCategory"
            element={<ProductCategory />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default MainPage;
