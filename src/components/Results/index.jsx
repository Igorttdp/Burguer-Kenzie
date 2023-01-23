const Results = ({ filteredProducts, search }) => {
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
