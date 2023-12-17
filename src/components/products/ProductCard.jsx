import React from "react";
import "./ProductCard.css";

function ProductCard(props) {
  return (
    <>
      <div className="product-card">
        <div className="card-image">
          <img className="no-hover-image" src={props.images[0]} alt={props.name} />
          <img className="hover-image" src={props.images[1]} alt={props.name} />
        </div>
        <div className="card-details">
          <div className="product-name">{props.name}</div>
          <div className="product-price">₹ {props.price}</div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
