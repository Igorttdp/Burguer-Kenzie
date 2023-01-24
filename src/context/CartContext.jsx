import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartTotal();
  });

  const setCartTotal = () => {
    if (cartProducts.length !== 0) {
      setTotal(
        cartProducts.reduce((pv, cv) => {
          return pv + cv.totalPrice;
        }, 0)
      );
    }
  };

  const removeItem = (e) => {
    const el = e.target;

    const id = Number(el.parentElement.getAttribute("aria-labelledby"));

    setCartProducts(
      cartProducts.filter((el) => {
        if (el.id === id) {
          el.amount = 1;
          el.totalPrice = el.price;
        }

        return el.id !== id;
      })
    );
  };

  const removeAll = () => {
    cartProducts.forEach((el) => {
      el.amount = 1;
      el.totalPrice = el.price;

      return;
    });

    setCartProducts([]);
  };

  const increaseProduct = (e) => {
    const el = e.target;

    const id = Number(
      el.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
        "aria-labelledby"
      )
    );

    const product = cartProducts.find((el) => el.id === id);

    product.amount += 1;
    product.totalPrice += product.price;

    setCartProducts([...cartProducts]);
    return;
  };

  const decreaseProduct = (e) => {
    const el = e.target;

    const id = Number(
      el.parentElement.parentElement.parentElement.parentElement.parentElement.getAttribute(
        "aria-labelledby"
      )
    );

    const product = cartProducts.find((el) => el.id === id);

    if (product.amount === 1) {
      setCartProducts(cartProducts.filter((el) => el.id !== id));
      return;
    }

    product.amount -= 1;
    product.totalPrice -= product.price;

    setCartProducts([...cartProducts]);
    return;
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        total,
        setTotal,
        setCartTotal,
        removeItem,
        removeAll,
        increaseProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
