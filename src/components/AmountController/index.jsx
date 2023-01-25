import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AmountControllerContainer from "./AmountControllerContainer";

const AmountController = ({ amount, newProduct, setNewProduct }) => {
  const { increaseProduct, decreaseProduct } = useContext(CartContext);
  const [disabled, setDisabled] = useState(false);

  const handleDecrease = (e) => {
    if (newProduct) {
      decreaseProduct(e, newProduct, setNewProduct);
    } else {
      decreaseProduct(e);
    }

    return;
  };

  const handleIncrease = (e) => {
    if (newProduct) {
      increaseProduct(e, newProduct, setNewProduct);
    } else {
      increaseProduct(e);
    }

    return;
  };

  useEffect(() => {
    if (newProduct && newProduct.amount === 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [newProduct, disabled]);

  return (
    <AmountControllerContainer>
      <tbody>
        <tr>
          <td>
            <button disabled={disabled} onClick={handleDecrease}>
              -
            </button>
          </td>
          <td>{amount}</td>
          <td>
            <button onClick={handleIncrease}>+</button>
          </td>
        </tr>
      </tbody>
    </AmountControllerContainer>
  );
};

export default AmountController;
