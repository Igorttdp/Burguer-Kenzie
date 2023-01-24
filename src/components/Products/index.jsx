import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { SearchContext } from "../../context/SearchContext";

const Products = () => {
  const { products, addProducts } = useContext(ProductsContext);
  const { filteredProducts } = useContext(SearchContext);

  const arr = filteredProducts.length !== 0 ? filteredProducts : products;

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
