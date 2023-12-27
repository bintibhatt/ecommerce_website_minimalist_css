import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMain } from "../context/MainContext";
import axios from "axios";
import { Outlet } from "react-router-dom";

function Home() {
  const { setCategories, categories } = useMain();
  const navigate = useNavigate();

  function getByCategory(value) {
    navigate(`/products/category/${value}`);
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", minHeight: "92.3vh" }}
    >
      <div className="main_home_div">
        <div className="main_home_categories">
          <p className="category_title">Categories</p>
          {categories.map((category) => (
            <p key={category} onClick={() => getByCategory(category)}>
              {category}
            </p>
          ))}
        </div>
        <div className="main_home_display">
          <Outlet />
        </div>
        {/* <div className="main_home_sorting">
          <p className="sorting_title">Sort by</p>
          <p>Sort</p>
          <p>Sort</p>
          <p>Sort</p>
        </div> */}
      </div>
    </div>
  );
}

export default Home;
