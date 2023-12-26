import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductCategory() {
  const [products, setProducts] = useState([]);
  const { pCategory } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${pCategory}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pCategory]);

  function handleProductInfo(pId) {
    navigate(`/products/${pId}`);
  }

  return (
    <div>
      <div className="product_card_div">
        {products.map((product) => (
          <div
            key={product.id}
            id="product_card"
            onClick={() => handleProductInfo(product.id)}
          >
            <ProductCard
              pTitle={product.title}
              pImg={product.images}
              pDesc={product.description}
              pCategory={product.category.name}
              pPrice={product.price}
              pId={product.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCategory;