import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartContainer } from "./CartContainer";
import AmountController from "../AmountController";

const Cart = () => {
  const { removeItem, removeAll, total, cartProducts } =
    useContext(CartContext);

  if (cartProducts.length === 0) {
    return (
      <CartContainer>
        <div className="header">
          <h2>Carrinho de Compras</h2>
        </div>
        <div className="body">
          <div className="empty">
            <h2>Sua sacola está vazia</h2>
            <p>Adicione itens</p>
          </div>
        </div>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <div className="header">
        <h2>Carrinho de Compras</h2>
      </div>
      <div className="body">
        <ul>
          {cartProducts.map((el) => (
            <li aria-labelledby={el.id} key={el.id}>
              <img src={el.img} alt={el.name} />
              <div>
                <h2>{el.name}</h2>
                <span>{el.category}</span>
              </div>
              <button onClick={(e) => removeItem(e)}>Remover</button>
              <AmountController amount={el.amount} />
            </li>
          ))}
        </ul>
        <hr />
        <div className="total">
          <span>
            <strong>Total</strong>
          </span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
        <button className="removeAll" onClick={removeAll}>
          Remover Todos
        </button>
      </div>
    </CartContainer>
  );
};

export default Cart;
