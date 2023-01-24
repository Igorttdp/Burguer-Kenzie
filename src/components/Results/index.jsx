import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

const Results = () => {
  const { search } = useContext(SearchContext);

  if (search !== "") {
    return (
      <>
        <h3>
          Todos os resultados para: <span>{search}</span>
        </h3>
      </>
    );
  }
};

export default Results;
