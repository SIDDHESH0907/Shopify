// ProductList.js
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useFetchApi from "../hooks/useFetchApi";
import "./ProductList.css";

let original_products = [];

function ProductCarousel() {
  const { data: products, setUrl } = useFetchApi(
    "http://localhost:3000/products"
  );

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

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
      bottom: 0,
      behavior: "instant",
    });
  };

  return (
    <>
      <div className="product-headline">RECENT PRODUCTS</div>

      <div className="list-container">
        <div className="list-grid">
          {products
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </div>
      <hr className="select-category-hr" />

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

export default ProductCarousel;
