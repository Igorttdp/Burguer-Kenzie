import { useContext } from "react";
import { createContext, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const { products } = useContext(ProductsContext);

  const filteredProducts = products.filter((el) => {
    return el.name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase().trim());
  });
  return (
    <SearchContext.Provider value={{ search, setSearch, filteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
