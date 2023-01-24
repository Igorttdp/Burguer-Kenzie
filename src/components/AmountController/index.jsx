import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AmountControllerContainer from "./AmountControllerContainer";

const AmountController = ({ amount }) => {
  const { increaseProduct, decreaseProduct } = useContext(CartContext);

  return (
    <AmountControllerContainer>
      <tbody>
        <tr>
          <td>
            <button onClick={(e) => decreaseProduct(e)}>-</button>
          </td>
          <td>{amount}</td>
          <td>
            <button onClick={(e) => increaseProduct(e)}>+</button>
          </td>
        </tr>
      </tbody>
    </AmountControllerContainer>
  );
};

export default AmountController;
