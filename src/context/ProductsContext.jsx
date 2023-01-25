import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { CartContext } from "./CartContext";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const addProducts = (e, product) => {
    const el = e.target;

    const productId = product
      ? product.id
      : Number(el.parentElement.parentElement.getAttribute("aria-labelledby"));

    const [newProduct] = products.filter((el) => el.id === productId);
    if (!product && !newProduct.amount) newProduct.amount = 1;
    if (!product && !newProduct.totalPrice)
      newProduct.totalPrice = newProduct.price;
    if (product && !newProduct.amount) newProduct.amount = product.amount;
    if (product && !newProduct.totalPrice)
      newProduct.totalPrice = product.price;

    const verify = cartProducts.some((el) => el.id === newProduct.id);

    if (!verify) {
      setCartProducts([...cartProducts, newProduct]);
    } else {
      if (!product) {
        newProduct.totalPrice += newProduct.price;
        newProduct.amount++;
      } else {
        newProduct.totalPrice += product.totalPrice;
        newProduct.amount += product.amount;
      }

      setCartProducts([...cartProducts]);
    }

    return;
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, addProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
