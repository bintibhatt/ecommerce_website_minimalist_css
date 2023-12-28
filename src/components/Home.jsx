import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMain } from "../context/MainContext";
import axios from "axios";
import { Outlet } from "react-router-dom";
const filters = ["A-Z", "Z-A", "Cost: Low to High", "Cost: High to Low"];

function Home() {
  const { setCategories, categories } = useMain();
  const navigate = useNavigate();
  const { pCategory } = useParams();

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

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", minHeight: "92.3vh" }}
    >
      <div className="main_home_div">
        <div className="main_home_categories">
          <p className="category_title">Categories</p>
          {categories.map((category) => (
            <div
              key={category}
              className={`categoryLink ${
                category === pCategory ? "activeCategory" : ""
              }`}
              to={`/products/category/${category}`}
              onClick={() => navigate(`/products/category/${category}`)}
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
        <div className="main_home_display">
          <Outlet />
        </div>

        <div className="main_home_sorting">
          <p className="sorting_title">Sort by</p>
          {filters.map((filter) => (
            <div key={filter}>
              <p className="sortingLink">{filter}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
