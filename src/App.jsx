// Components
import Cart from "./components/Cart";
import Products from "./components/Products";
import Results from "./components/Results";
import HamburguerHeader from "./components/Header";

// Styled-Components
import { SearchResults } from "./components/Results/SearchResults";
import { ProductCard } from "./components/Products/Products";
import { MainDiv } from "./components/MainDiv/MainDiv";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import AppContainer from "./components/AppContainer";

function App() {
  const theme = {
    lightBgPrimary: "#ffffff",
    darkBgPrimary: "#1e201f",
    lightBgSecundary: "#F5F5F5",
    darkBgSecundary: "#181a18",
    lightColor: "#000",
    darkColor: "#fff",
    lightRemoveAllBtn: "#E0E0E0",
    darkRemoveAllBtn: "transparent",
    lightBorderRemoveAllBtn: "transparent",
    darkBorderRemoveAllBtn: "#E60000",
    lightRemoveAllBtnColor: "#828282",
  };

  const invertedTheme = ({
    lightBgPrimary,
    darkBgPrimary,
    lightBgSecundary,
    darkBgSecundary,
    lightColor,
    darkColor,
    lightRemoveAllBtn,
    darkRemoveAllBtn,
    lightBorderRemoveAllBtn,
    darkBorderRemoveAllBtn,
    lightRemoveAllBtnColor,
  }) => ({
    lightBgPrimary: darkBgPrimary,
    darkBgPrimary: lightBgPrimary,
    lightBgSecundary: darkBgSecundary,
    darkBgSecundary: lightBgSecundary,
    lightColor: darkColor,
    darkColor: lightColor,
    lightRemoveAllBtn: darkRemoveAllBtn,
    darkRemoveAllBtn: lightRemoveAllBtn,
    lightBorderRemoveAllBtn: darkBorderRemoveAllBtn,
    darkBorderRemoveAllBtn: lightBorderRemoveAllBtn,
    lightRemoveAllBtnColor: darkColor,
  });

  const [darkmode, setDarkmode] = useState(false);

  return (
    <ThemeProvider theme={darkmode === true ? invertedTheme(theme) : theme}>
      <AppContainer>
        <HamburguerHeader darkmode={darkmode} setDarkmode={setDarkmode} />
        <SearchResults>
          <Results />
        </SearchResults>
        <MainDiv>
          <ProductCard>
            <Products />
          </ProductCard>
          <Cart />
        </MainDiv>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
