import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CartCounter from "../cart/CartCounter";
import { useTheme } from "../../context/ThemeContext";

function ProductInfo() {
  const [product, setProduct] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const { productId } = useParams();

  const { theme } = useTheme();

  const infoBorder = theme ? "1px solid black" : "1px solid white ";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      const initialMainImage = response.data.thumbnail;
      setProduct(response.data);
      setMainImage(initialMainImage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  useState(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="product_info_div">
        <div className="productInfo" style={{ border: `${infoBorder}` }}>
          <div className="productInfo_images">
            <section>
              {product.images?.map((image, index) => (
                <img
                  className="productInfo_otherImg"
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </section>
            <img
              className="productInfo_mainImg"
              src={mainImage}
              alt={product.title}
            />
          </div>
          <div className="productInfo_content">
            <h1>{product.title}</h1>
            <h2> ${product.price}</h2>
            <p> {product.description}</p>
            <ul>
              <li>
                <p>Category: {product.category}</p>
              </li>
              <li>
                <p>Brand: {product.brand}</p>
              </li>
              <li>
                <p>Discount: {product.discountPercentage}%</p>
              </li>
              <li>
                <p>Rating: {product.rating}</p>
              </li>
              <li>
                <p>Stock: {product.stock} units</p>
              </li>
            </ul>
            <h4>Add to Cart:</h4>
            <CartCounter pId={productId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
