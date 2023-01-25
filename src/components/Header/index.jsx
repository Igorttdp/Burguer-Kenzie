import { Header } from "./Header";
import logoLight from "../../imgs/logoLight.svg";
import logoDarkmode from "../../imgs/logoDarkmode.svg";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import SwitchButton from "../Switch";

const HamburguerHeader = ({ darkmode, setDarkmode }) => {
  const { search, setSearch } = useContext(SearchContext);

  const handleSearch = (e) => {
    setSearch(e.target.value);

    return;
  };

  return (
    <Header>
      <div className="header__container">
        <div className="header__logo">
          <img
            src={darkmode === true ? logoDarkmode : logoLight}
            alt="Burguer Kenzie"
          />
        </div>
        <div className="header__forms">
          <SwitchButton
            setDarkmode={setDarkmode}
            darkmode={darkmode}
            role="button"
          />
          <form className="header__search">
            <input
              onChange={handleSearch}
              placeholder="Digitar Pesquisa"
              type="text"
              value={search}
            />
          </form>
        </div>
      </div>
    </Header>
  );
};

export default HamburguerHeader;
