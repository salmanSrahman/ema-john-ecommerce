import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Shop.css";
import Product from "../Products/Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col md={10}>
            <div className="products-container">
              {products.map((product) => (
                <Product key={product.key} product={product}></Product>
              ))}
            </div>
          </Col>
          <Col md={2}>
            <div className="cart-container"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
