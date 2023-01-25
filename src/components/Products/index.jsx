import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { SearchContext } from "../../context/SearchContext";
import ProductModal from "../ProductModal";

const Products = () => {
  const { products, addProducts } = useContext(ProductsContext);
  const { filteredProducts } = useContext(SearchContext);

  const arr = filteredProducts.length !== 0 ? filteredProducts : products;

  if (arr.length === 0) return;

  return (
    <>
      {arr.map((el) => {
        return (
          <ProductModal
            key={el.id}
            category={el.category}
            id={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
          >
            <li aria-labelledby={el.id}>
              <div className="productImg">
                <img src={el.img} alt={el.name} />
              </div>
              <div className="productInfo">
                <h2>{el.name}</h2>
                <span>{el.category}</span>
                <span>
                  <strong>R$ {el.price.toFixed(2)}</strong>
                </span>
                <button onClick={addProducts}>Adicionar</button>
              </div>
            </li>
          </ProductModal>
        );
      })}
    </>
  );
};

export default Products;
