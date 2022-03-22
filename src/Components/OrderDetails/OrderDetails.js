import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import "./OrderDetails.css";

const OrderDetails = ({ product }) => {
  const { name, price, seller, star, starCount, stock } = product;
  return (
    <div className="product-container">
      <div className="product-details d-flex align-items-center">
        <div>
          <h5 className="text-primary fw-bold fs-5">{name}</h5>
          <div className="d-flex justify-content-space-between py-3">
            <div>
              <h5>By: {seller}</h5>
              <h5>${price}</h5>
              <h5>
                only {stock} left in stock -{" "}
                <span className="text-danger">order soon</span>
              </h5>
              <div className="rating-part my-3">
                <Rating
                  className="rating-style"
                  initialRating={star}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  readonly
                />
                <span className="text-secondary"> ({starCount} Review.)</span>
              </div>
              <Button variant="warning" className="fw-bold my-2 btn-color">
                Add To Cart
              </Button>
            </div>
            <div>
              <h5>Features:</h5>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
