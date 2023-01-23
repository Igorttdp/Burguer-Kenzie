const Cart = ({ products, cartProducts, setCartProducts, total, setTotal }) => {

  const setCartTotal = () => {
    if (cartProducts.length !== 0) {
      setTotal(cartProducts.reduce((pv, cv) => {
        return pv + cv.totalPrice
      }, 0))
    }
  }

  setCartTotal()

  const removeItem = (e) => {
    const el = e.target;

    const id = Number(el.parentElement.getAttribute("aria-labelledby"))

    setCartProducts(cartProducts.filter(el => {
      if (el.id === id) {
        el.amount = 1;
        el.totalPrice = el.price
      }
      
      return el.id !== id
    }))
  }

  const removeAll = () => {
    setCartProducts([])
  };

  if (products.length === 0) {
    return (
      <>
        <div className="empty">
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </div>
      </>
    );
  }

  return (
    <>
      <ul>
        {products.map((el) => (
          <li aria-labelledby={el.id} key={el.id}>
            <img src={el.img} alt={el.name} />
            <div>
              <h2>{el.name}</h2>
              <span>{el.category}</span>
            </div>
            <button onClick={(e) => removeItem(e)}>Remover</button>
            <span>Qtde: {el.amount}</span>
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
      <button className="removeAll" onClick={() => removeAll()}>Remover Todos</button>
    </>
  );
};

export default Cart;
