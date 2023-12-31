// ProductList.js
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useFetchApi from "../hooks/useFetchApi";
import "./ProductList.css";

let original_products = [];

function ProductList() {
  const { data: products, setUrl } = useFetchApi(
    "http://localhost:3000/products"
  );

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <>
      <div className="select-category">
        <button
          className="select-category-btn"
          onClick={() => setUrl("http://localhost:3000/products")}
        >
          All
        </button>
        <button
          className="select-category-btn"
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Mobiles")
          }
        >
          Mobiles
        </button>
        <button
          className="select-category-btn"
          onClick={() => setUrl("http://localhost:3000/products?category=TVs")}
        >
          Televisions
        </button>
        <button
          className="select-category-btn"
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Tablets")
          }
        >
          Tablets
        </button>
        <button
          className="select-category-btn"
          onClick={() =>
            setUrl("http://localhost:3000/products?category=Laptops")
          }
        >
          Laptops
        </button>
      </div>
      <hr className="select-category-hr" />

      <div className="product-headline">FEATURED PRODUCTS</div>

      <div className="list-container">
        <div className="list-grid">
          {shuffleArray(products)
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </div>
      <hr className="select-category-hr" />
    </>
  );
}

export default ProductList;
