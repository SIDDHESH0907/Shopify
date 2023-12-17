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

  const pageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    scrollToTop();
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior:"instant",
    });
  };

  return (
    <>
      <div className="list-container">
        <div className="list-grid">
          {shuffleArray(products)
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </div>

      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => {
            prevPage();
          }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="pagination-btn"
          onClick={() => {
            nextPage();
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default ProductList;
