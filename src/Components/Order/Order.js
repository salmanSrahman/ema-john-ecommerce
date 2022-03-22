import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProduct from "../Hooks/useProduct";
import OrderDetails from "../OrderDetails/OrderDetails";
import "./Order.css";

const Order = () => {
  const [products] = useProduct();
  const [cart] = useCart(products);
  return (
    <div>
      <Container>
        <Row>
          <Col md={9}>
            <div className="products-container">
              {cart.map((product) => (
                <OrderDetails
                  product={product}
                  key={product.key}
                ></OrderDetails>
              ))}
            </div>
          </Col>
          <Col md={3}>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
