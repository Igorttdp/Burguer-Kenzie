import * as Dialog from "@radix-ui/react-dialog";
import AmountController from "../AmountController";
import StyledDialogContent from "./StyledDialogContent";
import "./styles.css";
import Cart from "../Cart";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const ProductModal = ({ children, category, id, img, name, price }) => {
  const { addProducts } = useContext(ProductsContext);

  const [open, setOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    category,
    id,
    img,
    name,
    price,
    amount: 1,
    totalPrice: price,
  });

  const verifyTargetElement = (e) => {
    const el = e.target;

    if (el.localName === "button") setOpen(false);
    else setOpen(true);

    return;
  };

  const changeOpen = () => {
    setOpen(!open);

    return;
  };

  const handleAddProducts = (e) => {
    addProducts(e, newProduct);
    setNewProduct({
      category,
      id,
      img,
      name,
      price,
      amount: 1,
      totalPrice: price,
    });
    changeOpen();
  };

  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger asChild onClick={(e) => verifyTargetElement(e)}>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay onClick={changeOpen} className="DialogOverlay" />
        <StyledDialogContent className="DialogContent">
          <div>
            <div>
              <img src={img} alt={name} />
            </div>
            <hr />
            <div>
              <div>
                <h2>{name}</h2>
                <span>R$ {newProduct.totalPrice.toFixed(2)}</span>
              </div>
              <div>
                <AmountController
                  amount={newProduct.amount}
                  newProduct={newProduct}
                  setNewProduct={setNewProduct}
                />
                <button onClick={handleAddProducts}>Adicionar</button>
              </div>
            </div>
          </div>
          <Cart />
        </StyledDialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ProductModal;
