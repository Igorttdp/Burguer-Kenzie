import CartProvider from "./CartContext";
import ProductsProvider from "./ProductsContext";
import SearchProvider from "./SearchContext";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <ProductsProvider>
        <SearchProvider>{children}</SearchProvider>
      </ProductsProvider>
    </CartProvider>
  );
};

export default Providers;
