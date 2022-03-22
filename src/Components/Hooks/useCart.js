import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const getProduct = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
        }
        getProduct.push(addedProduct);
      }
      setCart(getProduct);
    }
  }, [products]);

  return [cart, setCart];
};

export default useCart;
