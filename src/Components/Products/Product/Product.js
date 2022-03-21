import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const { img, name, price, seller, star, starCount, stock } = product;
  return (
    <div className="product-container">
      <div className="product-img">
        <img src={img} alt="" className="img-fluid" />
      </div>
      <div className="product-details d-flex align-items-center">
        <div>
          <h5 className="text-primary fw-bold fs-5">{name}</h5>
          <h5>By: {seller}</h5>
          <h5>${price}</h5>
          <h5>
            only {stock} left in stock -{" "}
            <span className="text-danger">order soon</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
