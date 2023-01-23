import { Header } from "./Header";
import logo from "../../imgs/logo.svg";
    
const HamburguerHeader = ({ search, setSearch }) => {
  return (
    <Header>
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Burguer Kenzie" />
        </div>
        <form className="header__search">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Digitar Pesquisa"
            type="text"
            value={search}
          />
        </form>
      </div>
    </Header>
  );
};

export default HamburguerHeader;
