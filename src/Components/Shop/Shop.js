import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Shop.css";
import Product from "../Products/Product/Product";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const searchValue = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(searchValue);
  };

  return (
    <div>
      <div className="search-container">
        <input type="text" onChange={handleSearch} />
      </div>
      <Container>
        <Row>
          <Col md={9}>
            <div className="products-container">
              {displayProducts.map((product) => (
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
