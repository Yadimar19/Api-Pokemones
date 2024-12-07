const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: "99%",
        padding: "13px",
        marginBottom: "25px",
        fontSize: "18px",
      }}
    />
  );
};

export default SearchBar;
