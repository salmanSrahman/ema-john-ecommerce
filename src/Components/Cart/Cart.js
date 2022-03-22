import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let subTotal = 0;
  let productQuantity = 0;
  for (const product of cart) {
    productQuantity += product.quantity;
    subTotal = subTotal + product.price * product.quantity;
  }
  const shippingTotal = subTotal > 100 ? 30 : 0;
  const totalBeforeTax = shippingTotal + subTotal;
  const tax = totalBeforeTax > 100 ? 10 : 0;
  const total = totalBeforeTax + tax;

  return (
    <div className="pt-5">
      <div className="text-center mb-3">
        <h3>Order Summary</h3>
        <h5>Items Ordered: {productQuantity}</h5>
      </div>
      <div>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr className="fw-bold">
              <td>Items: </td>
              <td>${subTotal.toFixed(2)}</td>
            </tr>
            <tr className="fw-bold">
              <td>Shipping & Handling: : </td>
              <td>${shippingTotal.toFixed(2)}</td>
            </tr>
            <tr className="fw-bold">
              <td>Total Before tax: </td>
              <td>${totalBeforeTax.toFixed(2)}</td>
            </tr>
            <tr className="fw-bold">
              <td>Estimated Tax:: </td>
              <td>${tax.toFixed(2)}</td>
            </tr>
            <tr className="fw-bold fs-4 text-danger">
              <td>Order Total: </td>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
