// React Hooks
import { useState } from "react";
import { useEffect } from "react";

// Components
import Cart from "./components/Cart";
import Products from "./components/Products";
import Results from "./components/Results";

// Styled-Components
import { SearchResults } from "./components/Results/SearchResults";
import { ProductCard } from "./components/Products/Products";
import { CartContainer } from "./components/Cart/Cart";
import { MainDiv } from "./components/MainDiv/MainDiv";

// Api
import api from "./services/api";
import HamburguerHeader from "./components/Header";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api
      .get()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const filteredProducts = products.filter((el) => {
    return el.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().trim());
  });

  return (
    <div className="App">
      <HamburguerHeader search={search} setSearch={setSearch} />
      <SearchResults>
        <Results filteredProducts={filteredProducts} search={search} />
      </SearchResults>
      <MainDiv>
        <ProductCard>
          <Products
            products={products}
            filteredProducts={filteredProducts}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        </ProductCard>
        <CartContainer>
          <div className="header">
            <h2>Carrinho de Compras</h2>
          </div>
          <div className="body">
            <Cart
              products={cartProducts}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              total={total}
              setTotal={setTotal}
            ></Cart>
          </div>
        </CartContainer>
      </MainDiv>
    </div>
  );
}

export default App;
