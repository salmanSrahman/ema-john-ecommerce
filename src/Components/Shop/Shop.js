import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Shop.css";
import Product from "../Products/Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col md={9}>
            <div className="products-container">
              {products.map((product) => (
                <Product
                  key={product.key}
                  product={product}
                  handleAddToCart={handleAddToCart}
                ></Product>
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

export default Shop;
