const Products = ({
  products,
  filteredProducts,
  cartProducts,
  setCartProducts,
}) => {
  const addProducts = (e) => {
    const el = e.target;

    const productId = Number(
      el.parentElement.parentElement.getAttribute("aria-labelledby")
    );

    const [ newProduct ] = products.filter((el) => el.id === productId);
    if (!newProduct.amount) newProduct.amount = 1
    if (!newProduct.totalPrice) newProduct.totalPrice = newProduct.price

    const verify = cartProducts.some((el) => el.id === newProduct.id);

    if (!verify) {
      setCartProducts([...cartProducts, newProduct]);
    } else {
      newProduct.totalPrice += newProduct.price
      newProduct.amount++
      setCartProducts([...cartProducts]);
    }
  };

  const arr = filteredProducts.length !== 0 ? filteredProducts : products

  return (
    <>
      {arr.map((el) => {
        return (
          <li aria-labelledby={el.id} key={el.id}>
            <div className="productImg">
              <img src={el.img} alt={el.name} />
            </div>
            <div className="productInfo">
              <h2>{el.name}</h2>
              <span>{el.category}</span>
              <span>
                <strong>R$ {el.price.toFixed(2)}</strong>
              </span>
              <button onClick={(e) => addProducts(e)}>Adicionar</button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Products;
