import React from "react";
import { Button } from "react-bootstrap";
import Rating from "react-rating";
import "./OrderDetails.css";

const OrderDetails = ({ product, handleRemove }) => {
  const { name, price, seller, star, starCount, stock, key } = product;
  return (
    <div className="cartProduct-container">
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
          <Button
            variant="warning"
            className="fw-bold my-2 btn-color"
            onClick={() => handleRemove(key)}
          >
            Remove Item
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
